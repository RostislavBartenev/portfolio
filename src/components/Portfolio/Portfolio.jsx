import React from 'react';

import styles from './Portfolio.module.scss'

import Project from "../Project/Project";

import excelImg from './assets/excel.jpg'
import navImg from './assets/navigator.jpg'
import pizzaImg from './assets/pizza.jpg'
import pokedexImg from './assets/pokedex.jpg'
import fightImg from './assets/pokemonsfight.jpg'
import scraperImg from './assets/scraper.jpg'
import vidochatImg from './assets/videochat.jpg'
import teleramImg from './assets/telegram.png'

const projects = [
  {
    id: 2,
    name: 'Excel',
    img: excelImg,
    type: 'js',
    link: 'https://github.com/RostislavBartenev/jsexcel',
  },
  {
    id: 8,
    name: 'Hospital',
    img: navImg,
    type: 'backend',
    link: 'https://hospitalnavigation.herokuapp.com/',
  },
  {
    id: 7,
    name: 'TG Library',
    img: teleramImg,
    type: 'backend',
    link: 'https://t.me/elbrusLibrary_bot',
  },
  {
    id: 4,
    name: 'Pizza',
    img: pizzaImg,
    type: 'fullstack',
    link: 'https://github.com/RostislavBartenev/reactPizza',
  },
  {
    id: 5,
    name: 'Pokedex',
    img: pokedexImg,
    type: 'frontend',
    link: 'https://github.com/RostislavBartenev/pokedex',
  },
  {
    id: 4,
    name: 'Poke-fight',
    img: fightImg,
    type: 'js',
    link: 'https://github.com/RostislavBartenev/pokemonsfight',
  },
  {
    id: 1,
    name: 'Scraper',
    img: scraperImg,
    type: 'backend',
    link: 'https://github.com/RostislavBartenev/news-scraper',
  },
  {
    id: 6,
    name: 'Work-keeper',
    img: vidochatImg,
    type: 'fullstack',
    link: 'https://github.com/RostislavBartenev/work-keeper',
  },
]


const Portfolio = () => {
  return (
    <>
      <a name="portfolio" />
      <section className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.cardsContainer}>
          {projects.map(project => <Project key={project.id} {...project}/>)}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
