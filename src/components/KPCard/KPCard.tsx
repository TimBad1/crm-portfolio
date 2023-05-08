import React from 'react';
import styles from './kpcard.module.scss';
import { IMoviesCard } from '../Pages/Kinopoisk';

interface ICard {
  props: IMoviesCard,
}

export function KPCard({props}: ICard) {
  console.log(props);
  
  return (
    <div className="card">
      <img src="" alt="" />
    </div>
  );
}
