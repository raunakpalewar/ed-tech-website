import React from 'react';
import styles from './CoursesSection.module.css';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const CoursesSection = () => {
  return (
    <section className={styles.courses_section}>
      <div className={styles.div1}>
        DATASCIENCE COURSE LEARNING PATH
      </div>
      <div className={styles.div2}>
        <h1>
          <strong>Data Science</strong> Course Curriculum
        </h1>
      </div>
      <div>
        <table className={styles.custom_table}>
          <tbody>
            <tr>
              <td className={styles.first_column}>
                <div className={styles.sub_row}><h1>C++</h1></div>
                <div className={styles.sub_row}><p>Learn C++ for strong programming fundamentals.</p></div>
              </td>
              <td className={styles.second_column}>
                <h2><RemoveRedEyeOutlinedIcon style={{verticalAlign:"middle",}} /> View Curriculum</h2>
              </td>
            </tr>

            <tr>
              <td className={styles.first_column}>
                <div className={styles.sub_row}><h1>MERN Stack</h1></div>
                <div className={styles.sub_row}><p>Master the MERN stack for high-demand projects.</p></div>
              </td>
              <td className={styles.second_column}>
                <h2><RemoveRedEyeOutlinedIcon style={{verticalAlign:"middle",}} /> View Curriculum</h2>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <div className={styles.sub_row}><h1>Data Structure & Algorithm</h1></div>
                <div className={styles.sub_row}><p>Excel in Data Structures and Algorithms for interview success.</p></div>
              </td>
              <td className={styles.second_column}>
                <h2><RemoveRedEyeOutlinedIcon style={{verticalAlign:"middle",}} /> View Curriculum</h2>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <div className={styles.sub_row}><h1>Competitve Programming</h1></div>
                <div className={styles.sub_row}><p>Excel in Data Structures and Algorithms for interview success.</p></div>
              </td>
              <td className={styles.second_column}>
                <h2><RemoveRedEyeOutlinedIcon style={{verticalAlign:"middle",}} /> View Curriculum</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CoursesSection;
