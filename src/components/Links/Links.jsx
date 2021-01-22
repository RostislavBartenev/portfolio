import React from 'react';

import style from './Links.module.scss'

import vk from './assets/vk.svg'
import git from './assets/github.svg'

const links = [
  {
    id: 1,
    name: 'GITHUB',
    link: 'https://github.com/RostislavBartenev',
    icon: git
  },
  {
    id: 2,
    name: 'VK',
    link: 'https://vk.com/rostislav.bartenev',
    icon: vk
  },
]

const Links = () => {
  return (
    <>
      <a name="contacts" />
      <section className={style.container}>
        <h4 className={style.title}>Contacts</h4>
        <div className={style.icons}>
          {links.map(({id, link, icon, name}) =>
            <a key={id} href={link} target="_blank" ><img className={style.icon} src={icon} alt={name} /></a>
          )}
        </div>
      </section>
    </>
  );
};

export default Links;
