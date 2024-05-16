'use client'
import { useState } from "react"
import styles from "./profile.module.scss"
export default () => {

    const [showMenu, setShowMenu] = useState(false);

    const onChange = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <button className={styles.login} onClick={onChange}>Profile</button>
                {
                    showMenu && <ul className={styles.menu}>
                                    <li>Profile</li>
                                    <li>Settings</li>
                                    <li>Subscription</li>
                                    <li>Exit</li>
                                </ul>
                }
        </div>
    )
}