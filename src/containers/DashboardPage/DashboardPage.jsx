import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WarningAlert } from '../../components/CustomAlert/CustomAlert';
import { CustomBackdrop } from '../../components/CustomBackdrop';
import { CustomTitle } from '../../components/CustomText/CustomText';
import { useData } from '../../hooks/useData';

const DashboardPage = () => {
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

  useEffect(() => {
    getData();
    setTimeout(() => setToggle(!toggle), 1000);
  }, [toggle]);

  const getData = async () => {
    const getData = await readData(deviceId);
    if (getData) {
      setData(getData.data);
      setTimeout(() => {
        setPending(false);
        setAlert(false);
      }, 500);
    } else {
      setAlert(true);
      setPending(false);
    }
  };

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  }
  if (alert) {
    return (
      <WarningAlert isOpen={alert} callback={() => setAlert(false)} text={'Você não possui dispositivos registrados'} />
    );
  } else {
    return (
      <div>
        <CustomTitle>Dashboard</CustomTitle>
        {data.map((_data, index) => (
          <p key={index}>{_data.transmittedData}</p>
        ))}
      </div>
    );
  }
};

export { DashboardPage };
