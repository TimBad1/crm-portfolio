import React from 'react';
import styles from './sidebar.module.scss';
import { SidebarLink } from '../../SidebarLink';
import { HTTP_LINKS } from '../../../assets/helpers/constantAPI';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {HTTP_LINKS.map((item, index) => (
          <li className={styles.item} key={index}>
            <SidebarLink name={item.name} icon={item.icon} link={item.link}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
