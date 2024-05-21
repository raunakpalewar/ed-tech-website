import React from 'react';
import styles from './CoursesSection.module.css';

const CoursesSection = () => {
  return (
    <section className={styles.courses_section}>
      <div className={styles.div1}>
        DATASCIENCE COURSE LEARNING PATH
      </div>
      <div className={styles.div2}>
        <h1>
           <strong> Data Science</strong> Course Curriculum
        </h1>
      </div>
    </section>
  );
};

export default CoursesSection;
