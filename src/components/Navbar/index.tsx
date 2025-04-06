'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './style.module.scss';

interface LinkMetadata {
  name: string;
  href: string;
}

const links: LinkMetadata[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Work', href: '/work' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <div className={styles.container}>
      <Link href="/">
        <span>Lorem Ipsum</span>
      </Link>
      <div className={styles.navLinks}>
        {links.map(link => (
          <Link href={link.href} className={styles.link} key={link.name}>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className={styles.menuIcon} onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </div>
      <SwipeableDrawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={styles.drawerContent}>
          <div className={styles.closeIcon} onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" />
          </div>

          <div className={styles.drawerLinks}>
            {links.map(link => (
              <Link href={link.href} className={styles.link} key={link.name}>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
