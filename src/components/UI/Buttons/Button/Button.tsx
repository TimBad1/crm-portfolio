import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

type TButtonColor = 'primary' | 'danger';

interface IButton {
  color?: TButtonColor;
  text: string;
}

export function Button({color = 'primary', text}: IButton) {
  return (
    <button className={classNames(styles.btn, styles[`btn_${color}`])}>{text}</button>
  );
}
