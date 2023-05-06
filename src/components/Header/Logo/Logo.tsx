import React from 'react';
import styles from './logo.module.scss';
import img from '../../../assets/images/logo-crm.png';

export function Logo() {
  return (
    <img className={styles.logo} src={img} alt="logo" />
  );
}
