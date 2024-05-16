'use client'
import { useState } from "react"
import styles from './count.module.scss'

export default () => {

        const classesForMomateba = [styles.button]
        const classesForDakleba = [styles.button]



    const [counter, setCounter] = useState(0);

    const momateba = () => {
        setCounter(counter + 1)
    }
    
    const dakleba = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }


    if(counter <= 0) {
        classesForDakleba.push(styles.disabled)

    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classesForMomateba.join(' ')} onClick={momateba}>მომატება</button>
            <button className={classesForDakleba.join(' ')} onClick={dakleba}>დაკლება</button>
        </div>
    )
}