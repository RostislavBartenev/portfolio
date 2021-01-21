import React from 'react';

import styles from './Header.module.scss'
import Navigation from "../Navigation/Navigation";

const info = {
  name: 'Rostislav',
  surname: 'Bartenev'
}

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
              {info.surname}
              <br/>
              {info.name}
            </h1>
            <Navigation />
        </header>
    );
};

export default Header;
