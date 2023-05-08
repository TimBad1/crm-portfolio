import React, { useState } from 'react';
import styles from './kinopoisk.module.scss';
import axios from 'axios';
import { KINOPOISK_URL, MOVIES } from '../../../api/Kinopoisk_vars';
import { Search } from '../../Search';
import { KPCard } from '../../KPCard';

export interface IMoviesCard {
  name: string,
  genres: string[],
  id: number,
  poster: string,
  ratingKp:number,
  shortDescription: string,
  year: number,
}



export function Kinopoisk() {
  const [movies, setMovies] =useState<IMoviesCard[]>([])

  axios.get(`${KINOPOISK_URL}${MOVIES}?limit=20`, {
    headers: { 'X-API-KEY': process.env.REACT_APP_KINOPOISK_TOKEN }
  })
  .then(({data}) => {
    console.log(data.docs)
    setMovies(data.docs)
  })
  return (
  <>
    <Search />
    <div className={styles.container}>
      <ul className="list">
        {movies.length >  0 && 
          movies.map(item => <KPCard props={item} />)
        }
      </ul>
    </div>
  </>
   );
}
