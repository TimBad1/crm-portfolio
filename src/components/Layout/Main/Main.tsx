import styles from './main.module.scss';

interface IMainProps {
  children?: React.ReactNode;
}

export function Main({children}: IMainProps) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
