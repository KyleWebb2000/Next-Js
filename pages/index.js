import Head from 'next/head';
import styles from '../styles/Header.module.css';
import sectionStyles from '../styles/Section.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <body className={styles.body}>
      <main>
        <div className={styles.container}>
          <Head>
            <title>Kyle's Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

            <div  className={styles.headerContainer}>

              <div  className={styles.headerTitle}>
                <h1>Next.js</h1>
                <h1>Next.js</h1>
              </div>

              <div  className={styles.headerNav}>
                <p className={styles.navLinks}><Link className={styles.textLink} href="/posts/first-post">My Post</Link></p>
                <p className={styles.navLinks}><Link className={styles.textLink}  href="/about">About Me</Link></p>
                <p className={styles.navLinks}><Link className={styles.textLink}  href="/contact">Contact</Link></p>
              </div>

            </div> 

        </div>
        
        <div className={sectionStyles.sectionContainer}>
          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>
        </div>

      </main>
    </body>

  )
}