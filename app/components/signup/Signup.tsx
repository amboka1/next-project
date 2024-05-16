'use client'
import Link from "next/link"
import styles from "./signup.module.scss"
import { useState } from "react"

export default () => {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [newUser, setNewUser] = useState('')
    
    const [validPass, setValidPass] = useState('')

    const focusEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const focusName = (e: any) => {
        setName(e.target.value);
    }
    const focusPass = (e: any) => {
        setPass(e.target.value);
    }
    const focusRePass = (e: any) => {
        setRePass(e.target.value);
    }

    const submitBtn = () => {
        if(pass !== rePass) {
            setValidPass('პაროლები ერთმანეთს არ ემთხვევა!')
        } else {
            setNewUser(`Email: ${email}, Name: ${name}, Pass: ${pass}, RePass: ${rePass}`)
            setValidPass('')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.signupForm}>
                <h1>Sign up</h1>
                <h1>{validPass}</h1>
                <input type="text" placeholder="Enter your email" onChange={focusEmail} />
                <input type="text" placeholder="Enter your name" onChange={focusName}  />
                <input type="password" placeholder="Password" onChange={focusPass} />
                <input type="password" placeholder="Repeat Password" onChange={focusRePass}  />

                { (name.length < 8 || pass.length < 8 || rePass.length < 8) ? (
                <button className={styles.disabled} disabled>Sign Up</button>
                ) : (<button onClick={submitBtn}>Sign Up</button>)}
                <sub>Do you already have an account? <Link href="/auth/signin"><span className={styles.signin}>Log In</span></Link></sub>
            </div>

            {newUser}
        </div>
    )
}