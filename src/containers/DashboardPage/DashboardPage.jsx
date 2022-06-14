import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';

import { WarningAlert } from '../../components/CustomAlert/CustomAlert';
import { CustomBackdrop } from '../../components/CustomBackdrop';
import { CustomText, CustomTitle } from '../../components/CustomText/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomChart } from '../../components/CustomChart';
import { useData } from '../../hooks/useData';

import arrowBackIcon from '../../assets/icons/arrow_back_icon.png';

import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  const navigate = useNavigate();

  const { deviceId } = useParams();

  const { readData } = useData();

  const [data, setData] = useState({
    deviceId: 'deviceId',
    recivedData: 'recivedData',
    transmittedData: 'transmittedData',
  });
  const [pending, setPending] = useState(true);
  const [alert, setAlert] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [size, setSize] = useState(10);
  const [rate, setRate] = useState(1000);

  useEffect(() => {
    getData();
    setTimeout(() => setToggle(!toggle), rate); // eslint-disable-next-line
  }, [toggle]);

  const getData = async () => {
    const getData = await readData(deviceId, size);
    console.log(getData);
    if (getData) {
      setData(getData);
      setTimeout(() => {
        setPending(false);
        setAlert(false);
      }, 500);
    } else {
      setAlert(true);
      setPending(false);
    }
  };

  const routeHandler = () => navigate('/devices', { replace: true });

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  }
  if (alert) {
    return (
      <WarningAlert isOpen={alert} callback={() => setAlert(false)} text={'Você não possui dispositivos registrados'} />
    );
  } else {
    return (
      <div className={styles['data']}>
        <CustomIcon icon={arrowBackIcon} callback={routeHandler} alt="Arrow back icon" />
        <div className={styles['body-container']}>
          <CustomTitle>DASHBOARD</CustomTitle>
          <CustomText>Quantidade de amostras [und]</CustomText>
          <Slider
            onChange={(value) => setSize(value.target.value)}
            defaultValue={5}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={50}
          />
          <CustomText>Intervalo de tempo entre requisições [ms]</CustomText>

          <Slider
            onChange={(value) => setRate(value.target.value)}
            defaultValue={1000}
            valueLabelDisplay="auto"
            step={1000}
            marks
            min={1000}
            max={5000}
          />
          <div className={styles['data-container']}>
            <CustomChart chartData={data} />
          </div>
        </div>
      </div>
    );
  }
};

export { DashboardPage };
