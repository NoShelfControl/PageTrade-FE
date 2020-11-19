import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import menu_icon from '../../assets/menu_icon.svg.png';
import styles from './Sidebar.css';

function Sidebar() {

  const handleClick = () => {
    { <img style={{ visibility: visible }} /> }
  }

  return (
    <div className={styles.Sidebar}>
      <img src={menu_icon} alt="menu icon" className={styles.menuIcon} onClick={handleClick} />
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Sidebar;
