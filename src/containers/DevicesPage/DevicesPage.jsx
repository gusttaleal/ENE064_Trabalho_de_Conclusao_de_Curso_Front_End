import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDevice } from '../../hooks/useDevice';
import { DeviceModal } from '../../components/CustomModal';
import { CustomBackdrop } from '../../components/CustomBackdrop/CustomBackdrop';
import { CustomTitle, CustomSubTitle, CustomText } from '../../components/CustomText';

import { CustomIcon } from '../../components/CustomIcon';
import arrowBackIcon from '../../assets/icons/arrow_back_icon.png';

import styles from './DevicesPage.module.scss';

const DevicesPage = () => {
  const navigate = useNavigate();
  const routeHandler = () => navigate('/', { replace: true });

  const { readDevices, updateDevice } = useDevice();

  const [devices, setDevices] = useState();
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const [pending, setPending] = useState(true);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const getDevices = await readDevices();
    setDevices(getDevices);
    setTimeout(() => setPending(false), '500');
  };

  const handleModal = (index) => {
    setIndex(index);
    setModal(!modal);
  };

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  } else {
    return (
      <div className={styles['devices']}>
        <CustomIcon icon={arrowBackIcon} callback={routeHandler} alt="Arrow back icon" />
        <div className={styles['devices-container']}>
          <CustomTitle>DISPOSITIVOS</CustomTitle>
          {devices.map((device, index) => (
            <div key={index} className={styles['data-container']} onClick={() => handleModal(index)}>
              <CustomText>ID: {device.deviceId}</CustomText>
              <CustomSubTitle>{device.deviceName}</CustomSubTitle>
            </div>
          ))}
        </div>
        <DeviceModal
          key={devices[index].deviceId}
          isOpen={modal}
          closeModal={() => setModal(!modal)}
          device={devices[index]}
          submit={(deviceId, deviceName, deviceType, deviceStatus) =>
            updateDevice(deviceId, deviceName, deviceType, deviceStatus)
          }
        />
      </div>
    );
  }
};

export { DevicesPage };
