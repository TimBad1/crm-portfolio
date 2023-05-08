import React from 'react';
import styles from './todoitem.module.scss';
import classNames from 'classnames';

interface ITodoItems {
  title: string,
  colorId: number,
  isActive: boolean,
}

export function TodoItem({title, colorId, isActive}: ITodoItems) {

  const classItem = classNames(
    styles.item,
    isActive ? '' : styles.done,
  )

  return (
    <div className={classItem}>
      <div className={styles[`color-${colorId}`]} />
      <span>{title}</span>
    </div>
  );
}
