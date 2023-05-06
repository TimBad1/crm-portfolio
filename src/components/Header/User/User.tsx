import React from 'react';
import styles from './user.module.scss';

export function User() {
  const user  = {
    avatar: '',
    name: '',
    email: '',
  }
  return (
    <div className={styles.user}>
    { user.avatar ? (
      <img className={styles.user__img} src={user.avatar} alt="avatar" />
    ) : (
      <div className={styles.user__bg}></div>
    )}

    <div>
      {user.email 
      ? (
        <h2 className={styles.title}>{user.name}</h2>
      ) : (
        <h2 className={styles.user__entry}>Войти</h2>  
      )
    }
      
    </div>
  </div>
  );
}
