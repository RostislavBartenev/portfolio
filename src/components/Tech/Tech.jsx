import React from 'react';

import styles from './Tech.module.scss'

import jsImg from './assets/js.svg'
import reactImg from './assets/react.svg'
import reduxImg from './assets/redux.svg'
import gatsbyImg from './assets/gatsby.svg'
import nextImg from './assets/nextjs.svg'
import htmlImg from './assets/html.svg'
import cssImg from './assets/css.svg'

import nodeImg from './assets/node.svg'
import strapiImg from './assets/strapi.svg'
import expressImg from './assets/express.svg'

import mongoImg from './assets/mongo.svg'
import firebaseImg from './assets/firebase.svg'

const tech = [
  {
    id: '1',
    title: 'Front-end',
    img: [jsImg, reactImg, reduxImg, gatsbyImg, nextImg, htmlImg, cssImg],
  },
  {
    id: '2',
    title: 'Back-end',
    img: [nodeImg, expressImg, strapiImg],
  },
  {
    id: '3',
    title: 'Database',
    img: [mongoImg, firebaseImg]
  }
]


const Tech = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.tech}>
        <hr/>
        {tech.map(({id, title, img}) =>
          <div key={id}>
            <h1>{title}</h1>
            <div className={styles.img}>
              {img.map(image => <img alt={image.toString()} key={image.toString()} src={image} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tech;

