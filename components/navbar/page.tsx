// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (

    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="#"><img src="/logo.png" alt="logo" /></Link>
        </div>
        

        {/* Mobile menu toggle */}
        <input type="checkbox" id="menuToggle" className={styles.toggle} />
        <label htmlFor="menuToggle" className={styles.hamburger}>
          &#9776; {/* Unicode for hamburger icon */}
        </label>

        <nav className={styles.nav} >
          <ul className={styles.navList}  >
            <li className={styles.dropdown} >
              <Link href="#">ABOUT US</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Our Company</Link></li>
                <li><Link href="/linkpage">Governance Structure</Link></li>
                 <li><Link href="/linkpage">Guiding Policies</Link></li>
                  <li><Link href="/linkpage">Social Responsibilities</Link></li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <Link href="#">PRODUCTS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Overview</Link></li>
                <li><Link href="/linkpage">Room air Conditioner</Link></li>
                <li><Link href="/linkpage">Air Cooler</Link></li>
                <li><Link href="/linkpage">Aai Purifier</Link></li>
                <li><Link href="/linkpage">Water Purifier</Link></li>
                 <li><Link href="/linkpage">Heat Pump</Link></li>
                  <li><Link href="/linkpage">Water Cooler</Link></li>
              </ul>
            </li>
             <li className={styles.dropdown}>
              <Link href="#">PROJECTS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">MEP and More</Link></li>
                <li><Link href="/linkpage">Buildings</Link></li>
                 <li><Link href="/linkpage">Data Centre</Link></li>
                <li><Link href="/linkpage">Industrial</Link></li>
                 <li><Link href="/linkpage">Infrastructure</Link></li>
                <li><Link href="/linkpage">Water Cooler</Link></li>
              </ul>
            </li>
             <li className={styles.dropdown}>
              <Link href="#">CUSTOMER SERVICES</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Service Solution</Link></li>
                <li><Link href="/linkpage">Certificates</Link></li>
                <li><Link href="/linkpage">Warrenty Registration</Link></li>
                <li><Link href="/linkpage">Aai Purifier</Link></li>
                <li><Link href="/linkpage">Water Purifier</Link></li>
                <li><Link href="/linkpage">Certificates</Link></li>
              </ul>
            </li>
             <li className={styles.dropdown}>
              <Link href="#">MANUFECTURING AND R&D</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Overview</Link></li>
                <li><Link href="/linkpage">Room air Conditioner</Link></li>
                <li><Link href="/linkpage">Air Cooler</Link></li>
                <li><Link href="/linkpage">Water Purifier</Link></li>
                <li><Link href="/linkpage">Water Cooler</Link></li>
                <li><Link href="/linkpage#">Mobile</Link></li>
              </ul>
            </li>
             <li className={styles.dropdown}>
              <Link href="#">INTERNATIONAL</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Overview</Link></li>
                <li><Link href="/linkpage">Room air Conditioner</Link></li>
                <li><Link href="/linkpage">Aai Purifier</Link></li>
                <li><Link href="/linkpage">Water Cooler</Link></li>
              </ul>
            </li>


               <li className={styles.dropdown}>
              <Link href="#">GROUP COMPINIES</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Overview</Link></li>
                <li><Link href="/linkpage">Room air Conditioner</Link></li>
                <li><Link href="/linkpage">Aai Purifier</Link></li>
                <li><Link href="/linkpage">Water Cooler</Link></li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <Link href="#">PRESS & INVESTORS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Overview</Link></li>
                <li><Link href="/linkpage">Room air Conditioner</Link></li>
                <li><Link href="/linkpage">Aai Purifier</Link></li>
                <li><Link href="/linkpage">Water Cooler</Link></li>
              </ul>
            </li>


          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
