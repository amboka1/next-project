'use client'
import Link from 'next/link'
import styles from './reset.pass.module.scss'
import { useState } from 'react'
export default () => {

    const [resetPass, setResetPass] = useState('');

    const focusEmail = (e: any) => {
        setResetPass(e.target.value)
    }



    return (
        <div className={styles.container}>
        <div className={styles.loginForm}>
            <h1>Reset Password</h1>
            <input type="text" placeholder="Enter your Email" onChange={focusEmail} />
            { (resetPass.length < 10) ? (
                <button className={styles.disabled} disabled>Reset Password</button>
            ) : (<button>Reset Password</button>)}
                
            <sub>Don't have an account? <Link href="/auth/signup"><span className={styles.createAcc}>Create Now</span></Link></sub>
        </div>
    </div>
    )
}