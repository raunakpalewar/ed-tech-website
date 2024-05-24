import React from 'react';
import styles from '../Components/InternshipSection.module.css';

const InternshipSection = () => {
    return (
        <section className={styles.internshipsection}>
            <h1>How does the Internship Program works ?</h1>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td colSpan='2' className={styles.cell}>
                                <div className={styles.step}>
                                    <div className={`${styles.line} ${styles.line1}`}></div>
                                    <div className={styles.stepIcon}>👤</div>
                                    <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
                                </div>
                            </td>
                            <td colSpan='2' className={styles.cell}>
                                <div className={styles.step}>
                                    <div className={`${styles.line} ${styles.line2}`}></div>
                                    <div className={styles.stepIcon}>👤</div>
                                    <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
                                </div>
                            </td>
                            <td colSpan='2' className={styles.cell}>
                                <div className={styles.step}>
                                <div className={`${styles.line} ${styles.line4}`}></div>

                                    <div className={styles.stepIcon}>👤</div>
                                    <p>Personal mentors to guide and help you throughout your journey as a friend</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='3' className={styles.cell}>
                                <div className={styles.step}>
                                    <div className={`${styles.line} ${styles.line3}`}></div>
                                    <div className={styles.stepIcon}>👤</div>
                                    <p>Build major projects which makes your resume stand apart</p>
                                </div>
                            </td>
                            <td colSpan='3' className={styles.cell}>
                                <div className={styles.step}>
                                    <div className={styles.stepIcon}>👤</div>
                                    <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className={styles.applyButton}>Apply now for ₹ 2999</button>
            </div>
        </section>
    );
};

export default InternshipSection;
