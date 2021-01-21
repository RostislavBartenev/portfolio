import React from 'react';

import style from './Project.module.scss'

const Project = ({link, name, img}) => {
  return (
    <div className={style.card}>
      <a className={style.link} target="_blank" href={link}>
        <img className={style.image} src={img}/>
        <div className={style.body}>
          <h3 className={style.title}>{name}</h3>
        </div>
      </a>
    </div>
  );
};

export default Project;
