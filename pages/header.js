import styles from '../styles/Header.module.css';
import Link from 'next/link';

function HeaderComponent() {    
    return (        
        <div className={styles.container}>

        <div  className={styles.headerContainer}>

          <div  className={styles.headerTitle}>
            <h1>Next.js</h1>
            <h1>Next.js</h1>
          </div>

          <div  className={styles.headerNav}>
            <p className={styles.navLinks}><Link className={styles.textLink} href="/first-post">My Post</Link></p>
            <p className={styles.navLinks}><Link className={styles.textLink}  href="/about">About Me</Link></p>
            <p className={styles.navLinks}><Link className={styles.textLink}  href="/contact">Contact</Link></p>
          </div>

        </div> 

    </div>
    )
}
export default HeaderComponent