// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <input type="checkbox" id="menuToggle" className={styles.toggle} />
        <label htmlFor="menuToggle" className={styles.hamburger}>
          &#9776;
        </label>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.dropdown}>
              <Link href="#">ABOUT US</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/aboutpage">Our Company</Link></li>
                <li><Link href="/aboutpage">Governance Structure</Link></li>
                <li><Link href="/linkpage">Guiding Policies</Link></li>
                <li><Link href="/linkpage">Social Responsibilities</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">PRODUCTS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/cardspage">Room Air Conditioner</Link></li>
                <li><Link href="/aircooler">Air Cooler</Link></li>
                <li><Link href="/airpurifier">Air Purifier</Link></li>
                <li><Link href="/aboutpage">Water Purifier</Link></li>
                <li><Link href="/aboutpage">Heat Pump</Link></li>
                <li><Link href="/aboutpage">Water Cooler</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">PROJECTS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/project">MEP and More</Link></li>
                <li><Link href="/aboutpage">Buildings</Link></li>
                <li><Link href="/aboutpage">Data Centre</Link></li>
                <li><Link href="/aboutpage">Industrial</Link></li>
                <li><Link href="/aboutpage">Infrastructure</Link></li>
                <li><Link href="/aboutpage">Projects Gallery</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">CUSTOMER SERVICES</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/service">Service Solution</Link></li>
                <li><Link href="/service">Certificates</Link></li>
                <li><Link href="/service">Warranty Registration</Link></li>
                <li><Link href="/aboutpage">Installation</Link></li>
                <li><Link href="/aboutpage">Warranty</Link></li>
                <li><Link href="/aboutpage">Certificates</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">MANUFACTURING AND R&D</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/manufacturing">History & Overview</Link></li>
                <li><Link href="/aboutpage">Manufacturing Excellence</Link></li>
                <li><Link href="/aboutpage">Manufacturing Facilities</Link></li>
                <li><Link href="/aboutpage">R & D</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">INTERNATIONAL</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/international">Overview</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">GROUP COMPANIES</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/linkpage">Blue Star Climatech Limited</Link></li>
                <li><Link href="/aboutpage">Blue Star Europe B.V.</Link></li>
                <li><Link href="/aboutpage">Blue Star Engineering</Link></li>
                <li><Link href="/aboutpage">Blue Star International FZCO</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="#">PRESS & INVESTORS</Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/career">Press Releases</Link></li>
                <li><Link href="/aboutpage">Press Clippings</Link></li>
                <li><Link href="/aboutpage">Investors</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
