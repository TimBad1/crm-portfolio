import React from 'react';
import styles from './kinopoisk.module.scss';
import axios from 'axios';
import { KINOPOISK_URL, MOVIES } from '../../../api/Kinopoisk_vars';
import { Search } from '../../Search';

export function Kinopoisk() {
console.log(process.env.REACT_APP_KINOPOISK_TOKEN);

  axios.get(`${KINOPOISK_URL}${MOVIES}?limit=20`, {
    headers: { 'X-API-KEY': process.env.REACT_APP_KINOPOISK_TOKEN }
  })
  .then(({data}) => {
    console.log(data)
  })
  return (
  <>
    <Search />
    <div className={styles.container}>

    </div>
  </>
   );
}
