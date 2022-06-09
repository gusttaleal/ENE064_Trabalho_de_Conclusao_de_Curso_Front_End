import styles from './CustomText.module.scss';

const CustomTitle = ({ children }) => <p className={styles['text-title']}>{children}</p>;

const CustomSubTitle = ({ children }) => <p className={styles['text-subtitle']}>{children}</p>;

const CustomText = ({ children }) => <p className={styles['text']}>{children}</p>;

export { CustomTitle, CustomSubTitle, CustomText };
