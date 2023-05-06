import React from 'react';
import styles from './content.module.scss';
import { Outlet } from 'react-router-dom';

export function Content() {
  return (
    <div className={styles.container}>
      <Outlet /> 
    </div>
      
  );
}
