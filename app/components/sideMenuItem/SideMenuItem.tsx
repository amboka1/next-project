'use client'
type Props = {
    title: string;
}
import styles from './side.menu.module.scss'
export default (props: Props) => {
    return( 

            <ul className={styles.menu}>
                <li className={styles.menuItem}>{props.title}</li>
            </ul>
    )
}