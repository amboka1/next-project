import styles from './search.module.scss'
export default () => {
    return (
            <div className="search">
                <input className={styles.searchInput} type="search" placeholder="Search for a course" />
                <button className={styles.button}>S</button>
            </div>
    )
}