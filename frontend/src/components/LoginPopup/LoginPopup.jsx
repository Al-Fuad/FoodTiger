import { assets } from '../../assets/assets'
import styles from './LoginPopup.module.css'
import React, { useState } from 'react'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <div className={styles.loginPopup}>
            <form action="" className={styles.loginPopupContainer}>
                <div className={styles.loginPopupTitle}>
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className={styles.loginPopupInputs}>
                    {currentState=='Login'?    
                    <></>:<input type="text" placeholder='Your name' required />
                    
                }
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState=='Sign Up' ? 'Create account' : 'Login'}</button>
                <div className={styles.loginPopupCondition}>
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState=='Login'
                ?<p>Create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup