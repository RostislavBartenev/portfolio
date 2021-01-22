import React from 'react';

import styles from './Hero.module.scss'

import Title from "../Title/Title";
import Tech from "../Tech/Tech";
import Portfolio from "../Portfolio/Portfolio";
import Links from "../Links/Links";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Title />
            <Tech />
            <Portfolio />
            <Links />
        </div>
    );
};

export default Hero;
