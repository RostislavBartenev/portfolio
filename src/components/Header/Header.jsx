import React from 'react';

import styles from './Header.module.scss'
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Бартенев
                <br/>
                Ростислав
            </h1>
            <Navigation />
        </header>
    );
};

export default Header;