import React from 'react';
import styles from './OfferSection.module.css';
import img1 from '../assets/image533.png';

const OfferSection = () =>{
    return(
        <section className={styles.offerSection}>
            <div className={styles.div1}>
                 <h1>Don't miss out on this <strong>limited-time opportunity</strong> to learn for <strong>Free!</strong> </h1>
            </div>
            <div className={styles.div2}>
                    <span> <h3>100% Refund Offer 😎 </h3> </span>
                    <span><p>20 Seats Left</p></span>
                    <div className={styles.progress_bar}>
                        <div className={styles.progress}></div>
                    </div>
                    <span><h4>  🕒 Offer ends in 10:00 Mins </h4></span>
           </div>
           <div>
            <span>
                <h2>How does it work?</h2>
            </span>
            <div className={styles.steps}>
                <span className={styles.hexaSection}>
                    <div className={styles.hexagone}><p>Step 1</p></div>
                    <span class={styles.divider}></span>
                    <div className={styles.hexagone}><p>Step 2</p></div>
                    <span class={styles.divider}></span>
                    <div className={styles.hexagone}><p>Step 3</p></div>
                </span>
                <span className={styles.main_div1}>
                    <div className={styles.div3}>
                        <h3>Step 1 : Enroll into your favorite course for only ₹1,499</h3>
                        <img src={img1} alt='img'></img>
                        <p>Start Learning with <strong> Lifetime Course Access.</strong></p>
                    </div>
                    <div className={styles.div3}>
                        <h3>Step 2: Complete Course & Assignments within 2 Years!</h3>
                        <span className={styles.div3_sub_span1}>
                            <h1>2</h1>
                            <p>
                            years time from the date of enrollment
                            </p>
                        </span>
                        <p>Finish the course within <strong> 2 Years </strong> to Qualify for Refund. </p>
                    </div>
                    <div className={styles.div3}>
                        <h3>Step 3: Receive 100% Refund upon completion</h3>
                        <span className={styles.div3_sub_span1}>
                            <h1>3</h1>
                            <p>
                                Enrollment Fee is refunded
                            </p>
                        </span>
                        <p>FUpon Course Completion within <strong> 2 Years, </strong> Get Your <strong>₹1,499 Back.</strong> </p>
                    </div>     
                </span>
            </div>
           </div>
        </section>
    );
};
export default OfferSection;