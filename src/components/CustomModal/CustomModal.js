import React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import PropTypes from 'prop-types';
import styles from './CustomModal.module.scss';
import { AppButton } from '../AppButton';
import { CustomSubTitle, CustomText, CustomTitle } from '../CustomText/CustomText';

const CustomModal = ({ isOpen, callback, submit }) => {
  return (
    <Modal className={styles['modal']} open={isOpen} onClose={callback}>
      <div className={styles['box']}>
        <CustomTitle>Lorem ipsum dolor sit amet.</CustomTitle>
        <CustomSubTitle>
          Consectetur adipiscing elit. Cras nec vestibulum purus. Quisque vitae ipsum et mauris posuere egestas vitae
          vitae neque.
        </CustomSubTitle>
        <CustomText>
          Donec a eros dolor. Etiam sed felis metus. Donec a eros dolor. Etiam sed felis metus. Donec a eros dolor.
          Etiam sed felis metus. Donec a eros dolor. Etiam sed felis metus.
        </CustomText>
        <TextField
          className={styles['textfield']}
          id="outlined-required"
          label="Device Name"
          defaultValue="Device Name"
        />
        <TextField
          className={styles['textfield']}
          id="outlined-required"
          label="Device Name"
          defaultValue="Device Name"
        />
        <TextField
          className={styles['textfield']}
          id="outlined-required"
          label="Device Name"
          defaultValue="Device Name"
        />
        <TextField
          className={styles['textfield']}
          id="outlined-required"
          label="Device Name"
          defaultValue="Device Name"
        />
        <TextField
          className={styles['textfield']}
          id="outlined-required"
          label="Device Name"
          defaultValue="Device Name"
        />
        <AppButton label="SUBMIT" callback={submit} />
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
