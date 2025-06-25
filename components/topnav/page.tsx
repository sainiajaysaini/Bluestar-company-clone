import React from 'react';
import styles from '../topnav/topnav.module.css';

const Topnav = () => {
  return (
    <div className={styles.topnav}>
      <div className={styles.logo}>
       <a href="#"><img src="/logo.png" alt="logo" /></a>
      </div>
      <div className={styles.links}>
        <a href="/aboutpage">Locations</a>
        <span>/</span>
        <a href="/aboutpage">Dealers</a>
        <span>/</span>
        <a href="/aboutpage">Dealership Request</a>
        <span>/</span>
        <a href="/career">Careers</a>
        <span>/</span>
        <a href="/aboutpage">Contact Us</a>
        <span>/</span>
        <a href="/aboutpage">TVCs</a>
        <span>/</span>
        <a href="/aboutpage">Consumers</a>
        <span>/</span>
        <a href="/aboutpage">Resources</a>
      </div>
    </div>
  );
};

export default Topnav;
