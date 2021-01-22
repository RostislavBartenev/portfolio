import React from 'react';

import style from './Project.module.scss'


const Project = ({link, name, img}) => {
  return (
    <div className={style.card}>
      <img
        src={img}
        alt={name} className={style.img} />
        <div className={style.links}>
          <a href={link} target="_blank" className={style.link}>View</a>
        </div>
    </div>
  );
};

export default Project;
