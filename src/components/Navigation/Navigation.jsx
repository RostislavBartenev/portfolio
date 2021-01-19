import React from 'react';

import styles from './Navigation.module.scss'


const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="">Обо мне</a></li>
                <li><a href="">Портфолио</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
