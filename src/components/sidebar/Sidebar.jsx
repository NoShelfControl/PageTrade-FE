import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import menu_icon from '../../assets/menu_icon.svg.png';
import styles from './Sidebar.css';

function Sidebar() {

  return (
    <div className={styles.Sidebar}>
      <img src={menu_icon} alt="menu icon" className={styles.menuIcon} />
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Sidebar;
