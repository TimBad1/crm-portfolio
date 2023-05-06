import styles from './sidebarlink.module.scss';
import { NavLink } from 'react-router-dom';

interface ICustomLink {
  name: string, 
  icon: string, 
  link: string,
}

export function SidebarLink({name, icon, link}: ICustomLink) {
  return (
    <NavLink to={link} className={({isActive}) => isActive ? styles['link-active'] : styles.link }>
      <img src={icon} alt={name} className={styles.img} />
      {name}
    </NavLink>
  );
}
