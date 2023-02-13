import Link from 'next/link';
import HeaderComponent from "../pages/header";
import styles from '../styles/Header.module.css';
import sectionStyles from '../styles/Section.module.css';


export default function AboutMe() {
  return (
    <>
    <body className={styles.body}>
      <HeaderComponent></HeaderComponent> 

        <div className={sectionStyles.sectionContainer}>
          <div className={sectionStyles.section}>
          <h1>About Us</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          </div>

          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>
        </div>
    </body>
    </>
  );
}                                                             