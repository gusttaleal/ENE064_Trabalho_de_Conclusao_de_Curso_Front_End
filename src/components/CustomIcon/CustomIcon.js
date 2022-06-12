import PropTypes from 'prop-types';

import styles from './CustomIcon.module.scss';

const CustomIcon = ({ callback, icon, alt }) => (
  <img onClick={callback} src={icon} className={styles['icon-element']} alt={alt} />
);

CustomIcon.propTypes = {
  callback: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { CustomIcon };
