import React from 'react';
import styles from './CertificateSection.module.css';
import certificateimg from '../assets/certificate.png';
import tutorimg from '../assets/tutor.png';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';

const CertificateSection =()=>{
    return(
        <section className={styles.certificate_section}>
            <h1>Unlock <strong>6 Certificates</strong> & <strong>Internship Opportunities!</strong> </h1>
            <div className={styles.maindiv}>
                <span className={styles.span1}>
                    <h2>
                    Get 6 Industry Recognized Certificates!
                    </h2>
                    <img src={certificateimg} alt='certificate'></img>
                    <div className={styles.subdiv}> 
                        <span><FlareOutlinedIcon styles={{fontSize: '20px', verticalAlign: 'middle'}} /> Official and Verified</span>
                        <span><FlareOutlinedIcon styles={{fontSize: '20px', verticalAlign: 'middle'}} /> Enhances Credibility</span>
                    </div>
                </span>
                <span className={styles.span2}>
                    <h2>Bag Internship Opportunities!</h2>
                    <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                    <img src={tutorimg} alt='certificate'></img>
                </span>
            </div>
        </section>

    );
};
export default CertificateSection;