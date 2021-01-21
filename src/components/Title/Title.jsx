import React from 'react';

import styles from './Title.module.scss'

const info = {
  title: 'Full Stack Developer',
  subtitle: 'MERN, JAM stacks'
}

const Title = () => {
  return (
    <>
      <a name="about" />
      <section className={styles.info__container}>
        <h1 className={styles.title}>{info.title}</h1>
        <h2 className={styles.subtitle}>{info.subtitle}</h2>
      </section>
    </>
  );
};

export default Title;
