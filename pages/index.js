import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <Head>
          <title>Kyle's Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div  className={styles.headerContainer}>

            <div  className={styles.headerTitle}>
              <h1>Welcome To My Next.js Website</h1>
            </div>

            <div  className={styles.headerNav}>
              <p className={styles.navLinks}><Link className={styles.textLink} href="/posts/first-post">My Post</Link></p>
              <p className={styles.navLinks}><Link className={styles.textLink}  href="/about">About Me</Link></p>
              <p className={styles.navLinks}><Link className={styles.textLink}  href="/contact">Contact</Link></p>
            </div>

          </div>
        </main>
    
      </div>
    </body>
  )
}