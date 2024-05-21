import React from 'react';
import styles from './BannerSection.module.css';
import onlineeducation from '../assets/Onlinelearning.png';
import graduate from '../assets/Graduated.png';
import complete from '../assets/Complete.png';
import question from '../assets/Question mark.png';

const BannerSection = () => {
  return (
    <section className={styles.banner_section}>
      <div className={styles.banner_sub_div}>
        <img src={onlineeducation} alt="Online Education" />
        <span>
          <h1>24</h1>
          <p>Courses</p>
        </span>
      </div>
      <div className={styles.banner_sub_div}>
        <img src={graduate} alt="Graduate" />
        <span>
          <h1>30k+</h1>
          <p>Learners</p>
        </span>
      </div>
      <div className={styles.banner_sub_div}>
        <img src={question} alt="Question" />
        <span>
          <h1>100k+</h1>
          <p>Doubts Solved</p>
        </span>
      </div>
      <div className={styles.banner_sub_div}>
        <img src={complete} alt="Complete" />
        <span>
          <h1>10k+</h1>
          <p>Student Projects</p>
        </span>
      </div>
    </section>
  );
};

export default BannerSection;
