import React from 'react'
import styles from "../styles/Home.module.css";

export const Signup = ({setLoginPage}) => {
    return (
        <div className={styles.loginbox}>
            <h2>Signup</h2>
            <form action="">
                <div className={styles.userbox}>
                    <input type="text" name="signup-username" required />
                    <label htmlFor="signup-username">Username</label>
                </div>
                <div className={styles.userbox}>
                    <input type="text" name="signup-email" required />
                    <label htmlFor="signup-email">E-mail</label>
                </div>
                <div className={styles.userbox}>
                    <input type="password" name="signup-password" required />
                    <label htmlFor="signup-password">Password</label>
                </div>

                <a className={styles.submit_btn} href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sign Up
                </a>
                <a className="" onClick={() => setLoginPage(true)}>Already have an account?</a>
            </form>
        </div>
    )
}

export default Signup
