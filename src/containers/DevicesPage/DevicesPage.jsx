import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDevice } from '../../hooks/useDevice';
import { DeviceModal } from '../../components/CustomModal';
import { CustomBackdrop } from '../../components/CustomBackdrop';
import { CustomTitle, CustomSubTitle, CustomText } from '../../components/CustomText';

import { CustomIcon } from '../../components/CustomIcon';
import arrowBackIcon from '../../assets/icons/arrow_back_icon.png';

import styles from './DevicesPage.module.scss';
import { ErrorAlert } from '../../components/CustomAlert/CustomAlert';

const DevicesPage = () => {
  const [devices, setDevices] = useState({
    userId: 'userId',
    deviceName: 'deviceName',
    deviceType: 'deviceType',
    deviceStatus: false,
  });
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [pending, setPending] = useState(true);

  useEffect(() => getDevices(), [modal]);

  const navigate = useNavigate();

  const { readDevices, updateDevice, deleteDevice } = useDevice();

  const getDevices = async () => {
    const getDevices = await readDevices();
    if (getDevices) {
      setDevices(getDevices.data);
      setTimeout(() => setPending(false), 500);
    } else {
      setAlert(true);
      setPending(false);
    }
  };

  const routeHandler = () => navigate('/', { replace: true });

  const modalHandler = (index) => {
    setIndex(index);
    setModal(!modal);
  };

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  }
  if (alert) {
    return (
      <ErrorAlert isOpen={alert} callback={() => routeHandler()} text={'Você não possui dispositivos registrados'} />
    );
  } else {
    return (
      <div className={styles['devices']}>
        <CustomIcon icon={arrowBackIcon} callback={routeHandler} alt="Arrow back icon" />
        <div className={styles['body-container']}>
          <CustomTitle>DISPOSITIVOS</CustomTitle>
          <div className={styles['devices-container']}>
            {devices.map((device, index) => (
              <div key={index} className={styles['data-container']} onClick={() => modalHandler(index)}>
                <CustomText>ID: {device.deviceId}</CustomText>
                <CustomSubTitle>{device.deviceName}</CustomSubTitle>
              </div>
            ))}
          </div>
        </div>
        <DeviceModal
          key={devices[index].deviceId}
          isOpen={modal}
          closeModal={() => setModal(!modal)}
          device={devices[index]}
          submitCallback={(deviceId, deviceName, deviceType, deviceStatus) =>
            updateDevice(deviceId, deviceName, deviceType, deviceStatus)
          }
          deleteCallback={(deviceId) => deleteDevice(deviceId)}
          refreshCallback={getDevices}
        />
      </div>
    );
  }
};

export { DevicesPage };
