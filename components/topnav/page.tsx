import React from 'react';
import styles from '../topnav/topnav.module.css';

const Topnav = () => {
  return (
    <div className={styles.topnav}>
      <div className={styles.logo}>
       <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.links}>
        <a href="/linkpage">Locations</a>
        <span>/</span>
        <a href="/linkpage">Dealers</a>
        <span>/</span>
        <a href="/linkpage">Dealership Request</a>
        <span>/</span>
        <a href="/linkpage">Careers</a>
        <span>/</span>
        <a href="/linkpage">Contact Us</a>
        <span>/</span>
        <a href="/linkpage">TVCs</a>
        <span>/</span>
        <a href="/linkpage">Consumers</a>
        <span>/</span>
        <a href="/linkpage">Resources</a>
      </div>
    </div>
  );
};

export default Topnav;
