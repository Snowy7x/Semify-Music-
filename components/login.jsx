import React from 'react'
import styles from "../styles/Home.module.css";

export const Login = ({setLoginPage}) => {
    return (
        <div className={styles.loginbox}>
            <h2>Login</h2>
            <form action="">
                <div className={styles.userbox}>
                    <input type="text" name="login-username" required />
                    <label htmlFor="login-username">Username</label>
                </div>
                <div className={styles.userbox}>
                    <input type="password" name="login-password" required />
                    <label htmlFor="login-password">Password</label>
                </div>
                <a className={styles.submit_btn} href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sign In
                </a>
                <a className="" onClick={() => setLoginPage(false)}>Do not have an account?</a>
            </form>
        </div>
    )

}

export default Login
