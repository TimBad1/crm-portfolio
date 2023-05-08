import styles from './sidebarlink.module.scss';
import { NavLink } from 'react-router-dom';

interface ICustomLink {
  name: string, 
  icon: string, 
  link: string,
}

export function SidebarLink({name, icon, link}: ICustomLink) {
  return (
    <NavLink to={link} className={({isActive}) => styles.link + (isActive ? ' ' + styles['link-active'] : '') }>
      <img src={icon} alt={name} className={styles.img} />
      <span>{name}</span>
      
    </NavLink>
  );
}
