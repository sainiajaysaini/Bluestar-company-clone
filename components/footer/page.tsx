import React from 'react';
import styles from '../../components/footer/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © Blue Star Limited 2025. All Rights Reserved.
      </div>
      <div className={styles.right}>
        <div className={styles.socialIcons}>
          <a href="#"><img src="/facebook-circle-fill.png" alt="Facebook" /></a>
          <a href="#"><img src="/twitter-line.png" alt="Twitter" /></a>
          <a href="#"><img src="/linkedin-box-fill.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/instagram-line.png" alt="Instagram" /></a>

        </div>
        <div className={styles.links}>
          <a href="#">E-Waste Guidelines</a>
          <a href="#">Sitemap</a>
          <a href="#">Terms of use of website</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
