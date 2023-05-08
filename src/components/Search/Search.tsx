import React from 'react';
import styles from './search.module.scss';

export function Search() {
  return (
    <form action="">
      <label>
        <input className={styles.input} type="text" placeholder='Найти фильм...' />
      </label>
      <button className={styles.btn} type='submit'>Найти</button>
    </form>
    
  );
}
