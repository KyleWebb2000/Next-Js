import Head from 'next/head';
import sectionStyles from '../styles/Section.module.css';
import HeaderComponent from "../pages/header";
import styles from '../styles/Header.module.css';
import Image from 'next/image';


const YourComponent = () => (
  <Image
    src="/images/photo1.png"
    height={250} // Desired size with correct aspect ratio
    width={250} // Desired size with correct aspect ratio
    alt="Moon"
    className={styles.photoStyles}
  />
);

export default function Main() {
  return (
    <body className={styles.body}>
      <Head>
        <title>Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Kyle's Blog"
          content="A blog regarding Kyle"
        />
      </Head>
      <main>
        <HeaderComponent></HeaderComponent> 
        
        <div className={sectionStyles.sectionContainer}>

          <YourComponent></YourComponent>

          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>

          <div className={sectionStyles.section}></div>
        </div>

      </main>
    </body>

  )
}