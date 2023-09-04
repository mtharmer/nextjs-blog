import styles from './navbar.module.css';
import NavItemList from './navItemList';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const { user } = useUser();
  const isLoggedIn = user && user.name;
  const navItems = [
    { key: 0, ref: "/", text: "Home" },
    { key: 1, ref: "/profile", text: "Profile", hidden: !isLoggedIn },
    { key: 2, ref: "/api/auth/login", text: "Login", hidden: isLoggedIn },
    { key: 3, ref: "/api/auth/logout", text: "Logout", hidden: !isLoggedIn }
  ];

  return (
    <nav className={styles.nav}>
      <NavItemList items={navItems} />
    </nav>
  )
}
