import Link from 'next/link';
import HeaderComponent from "../pages/header";
import styles from '../styles/Header.module.css';
import sectionStyles from '../styles/Section.module.css';


export default function Contact() {
  return (
    <>
      <body className={styles.body}>
        <main>
          <HeaderComponent></HeaderComponent> 
          
          <div className={sectionStyles.sectionContainer}>
            <div className={sectionStyles.section}>
              <h1>Contact Me</h1>
              <h2>
                <Link href="/">Back to home</Link>
              </h2>
            </div>

            <div className={sectionStyles.section}></div>

            <div className={sectionStyles.section}></div>
          </div>

        </main>
      </body>

    </>
  );
}