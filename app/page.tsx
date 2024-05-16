import Link from "next/link";
import styles from './page.module.css'
import SideMenuItem from "./components/sideMenuItem/SideMenuItem";

export default function Home() {
  return (
    <>
      <div className={styles.sideMenu}>
        <SideMenuItem title="Browse" />
        <SideMenuItem title="Workshop" />
        <SideMenuItem title="Problems" />
        <SideMenuItem title="Leaderboard" />
        <SideMenuItem title="Newsletter" />

        <div className={styles.upgrade}>
          <div className={styles.upgradeAcc}></div>
          <span className={styles.UpgradeText}>Upgrade to Pro</span>
          <sub className={styles.upgradeSubText}>Unlock weekly workshops, access to all paid content, and more.</sub>
          <Link href='/auth/signin'><button className={styles.button}>Upgrade</button></Link>
        </div>
      </div>
        
      </>
  );
}
