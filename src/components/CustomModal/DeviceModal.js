import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Switch } from '@material-ui/core';

import { AppButton } from '../AppButton';
import { CustomSubTitle, CustomText, CustomTitle } from '../CustomText';
import { CustomIcon } from '../CustomIcon';

import closeIcon from '../../assets/icons/close_icon.png';
import deleteIcon from '../../assets/icons/delete_icon.png';

import styles from './MenuModal.module.scss';
import { useNavigate } from 'react-router-dom';

const DeviceModal = ({ isOpen, closeModal, device, submitCallback, deleteCallback }) => {
  const navigate = useNavigate();

  const [deviceName, setDeviceName] = useState(device.deviceName);
  const [deviceType, setDeviceType] = useState(device.deviceType);
  const [deviceStatus, setDeviceStatus] = useState(device.deviceStatus);

  const handleChangeName = (event) => {
    setDeviceName(event.target.value);
  };

  const handleChangeType = (event) => {
    setDeviceType(event.target.value);
  };

  const handleChangeStatus = () => {
    setDeviceStatus(!deviceStatus);
  };

  const handleSubmitChanges = async () => {
    await submitCallback(device.deviceId, deviceName, deviceType, deviceStatus);
    window.location.reload();
  };

  const handleDelete = async () => {
    await deleteCallback(device.deviceId);
    window.location.reload();
  };

  const close = () => {
    setDeviceName(device.deviceName);
    setDeviceType(device.deviceType);
    setDeviceStatus(device.deviceStatus);

    closeModal();
  };

  const routeHandler = () => navigate(`/dashboard?deviceId=${device.deviceId}`, { replace: true });

  return (
    <Modal className={styles['modal']} open={isOpen} onClose={close}>
      <div className={styles['modal-container']}>
        <div className={styles['icon-container']}>
          <CustomIcon callback={close} icon={closeIcon} alt="Close icon" />
        </div>
        <div className={styles['body']}>
          <CustomTitle>DETALHES</CustomTitle>

          <CustomSubTitle>{device.deviceId}</CustomSubTitle>

          <CustomText>Atualize, visualize ou apague os dados ou o seu dispositivo</CustomText>

          <AppButton label="VISUALIZAR" callback={routeHandler} />

          <TextField
            value={deviceName}
            onChange={handleChangeName}
            fullWidth
            margin="normal"
            label="Nome do dispositivo"
          />

          <TextField
            value={device.deviceType}
            onChange={handleChangeType}
            fullWidth
            margin="normal"
            label="Tipo do dispositivo"
          />

          <FormControlLabel
            control={<Switch checked={device.deviceStatus} color="primary" onChange={handleChangeStatus} />}
            className={styles['status-container']}
            label="Estado do dispositivo"
          />
          <div className={styles['footer-container']}>
            <div className={styles['buttom-container-footer']}>
              <AppButton label="ATUALIZAR" callback={handleSubmitChanges} />
            </div>
            <div className={styles['icon-container-footer']}>
              <CustomIcon callback={handleDelete} icon={deleteIcon} alt="Close icon" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

DeviceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  submitCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  device: PropTypes.object.isRequired,
};

export { DeviceModal };
