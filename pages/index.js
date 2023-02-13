import Head from 'next/head';
import sectionStyles from '../styles/Section.module.css';
import HeaderComponent from "../pages/header";
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <body className={styles.body}>
      <Head>
        <title>Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderComponent></HeaderComponent> 
        
        <div className={sectionStyles.sectionContainer}>
          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>
        </div>

      </main>
    </body>

  )
}