import React from 'react';
import styles from './Companies.module.css';


const CompaniesSection = ()=>{
    return(
        <section className={styles.company_section}>
            <h1>Top Companies Hiring <strong>Data Scientist</strong> </h1>
            <div className={styles.company_names}>
                <span><h2>Logo</h2></span>
                <span><h2>Logo</h2></span>
                <span><h2>Logo</h2></span>
                <span><h2>Logo</h2></span>
                <span><h2>Logo</h2></span>
            </div>
        </section>

    );
};
export default CompaniesSection;