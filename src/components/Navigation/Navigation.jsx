import React from 'react';

import styles from './Navigation.module.scss'
import NavLink from "../NavLink/NavLink";

const nav = [
  {
    id: 1,
    name: 'About',
    link: '#about',
  },
  {
    id: 2,
    name: 'Portfolio',
    link: '#portfolio',

  },
  {
    id: 3,
    name: 'Contacts',
    link: '#contacts',
  },
]


const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
              {nav.map(navLink => <NavLink key={navLink.id} {...navLink} />)}
            </ul>
        </nav>
    );
};

export default Navigation;
