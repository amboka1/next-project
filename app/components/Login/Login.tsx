'use client'
import Link from 'next/link'
import styles from './login.module.scss'
import { useState } from 'react'

export default () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    
    const onName = (e: any) => {
        setName(e.target.value);
    } 
    const onPass = (e: any) => {
        setPass(e.target.value);
    } 

    const submitBtn = () => {
            setUser(`Name: ${name}, Password: ${pass}`);
    }



    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <input type="text" placeholder="Enter your name" onChange={onName} />
                <input type="password" placeholder="Password" onChange={onPass} />
                { (name.length < 8 || pass.length < 8) ? (
                <button className={styles.disabled} disabled onClick={submitBtn}>Login</button>
                ) : (
                <button onClick={submitBtn}>Login</button>
                )
            }
                <sub>Don't have an account? <Link href="/auth/signup"><span className={styles.createAcc}>Create Now</span></Link></sub>
                <sub>Forget password? <Link href="/resetPass"><span>Reset Password</span></Link></sub>
            </div>
            
            <div>
                {user}
            </div>
        </div>
    )
}
