import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControlLabel, Switch } from '@material-ui/core';

import { AppButton } from '../AppButton';
import { CustomSubTitle, CustomText, CustomTitle } from '../CustomText';

import closeIcon from '../../assets/icons/close_icon.png';
import styles from './CustomModal.module.scss';

const CustomModal = ({ isOpen, callback, submit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeStatus = () => {
    setStatus(!status);
  };

  const handleChangeSubmit = () => submit(name, type, status);

  return (
    <Modal className={styles['modal']} open={isOpen} onClose={callback}>
      <div className={styles['box']}>
        <div className={styles['icon']}>
          <img onClick={callback} src={closeIcon} width="25px" alt="Close button" />
        </div>
        <Box className={styles['container-box']}>
          <CustomTitle>CRIE UM DISPOSITIVO</CustomTitle>

          <CustomSubTitle>Cadastre seu novo dispositivo</CustomSubTitle>

          <CustomText>
            Escolha um nome, preencher o tipo e defina o estado do seu dispositivo, habilitado ou desabilitado.
          </CustomText>

          <TextField value={name} onChange={handleChangeName} fullWidth margin="normal" label="Nome do dispositivo" />

          <TextField value={type} onChange={handleChangeType} fullWidth margin="normal" label="Tipo do dispositivo" />

          <FormControlLabel
            control={<Switch checked={status} color="primary" onChange={handleChangeStatus} />}
            className={styles['status-container']}
            label="Estado do dispositivo"
          />

          <AppButton label="CADASTRAR" callback={handleChangeSubmit} />
        </Box>
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export { CustomModal };
