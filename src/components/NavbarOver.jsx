import React from 'react';
import search from '../image/search.svg';
import notification from '../image/new.svg';
import line from '../image/line.svg';
import avatar from'../image/avatar.png'

const NavbarOver = (p) => {
  return (
    <div className='navbar-home'>
      <div className="left"><h1>{p.title}</h1></div>
      <div className="right">
        <img src={search} alt="search" />
        <img src={notification} alt="notification" />
        <img src={line} alt="line" />
        <span>Jones Ferdinand</span>
        <img src={avatar} alt="avatar" />

      </div>
    </div>
  )
}

export default NavbarOver
