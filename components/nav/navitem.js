import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavItem({ item }) {
  return (item.hidden) ? <></> : <Link className={styles.navItem} href={item.ref}>{item.text}</Link>;
}
