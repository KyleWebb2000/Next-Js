import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
         Welcome To <a>My Blog</a>
        </h1>

        <div>
          <h1 className="title">
            <Link href="/posts/first-post">My Post</Link>
          </h1>
          <h1 className="title">
            <Link href="/about">About Me</Link>
          </h1>
        </div>
      </main>

    </div>
  )
}