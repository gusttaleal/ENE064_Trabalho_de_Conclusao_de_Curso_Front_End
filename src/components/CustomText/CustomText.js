import styles from './CustomText.module.scss';

const CustomTitle = ({ children }) => <h1 className={styles['text-title']}>{children}</h1>;

const CustomSubTitle = ({ children }) => <h2 className={styles['text-subtitle']}>{children}</h2>;

const CustomText = ({ children }) => <p className={styles['text']}>{children}</p>;

export { CustomTitle, CustomSubTitle, CustomText };
