import React from 'react';
import styles from './header.module.scss';
import { Logo } from './Logo';
import { User } from './User';

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <User />
    </div>
  );
}
