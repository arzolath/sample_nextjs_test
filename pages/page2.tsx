import Head from 'next/head'
import styles from '../styles/Page2.module.css'
import Navbar from './navbar'
import Image from 'next/image'

export default function Page2() {
	return (
		<>
			<Head>
			<title>Sample NextJS Test</title>
			<meta name="description" content="Challange project for Furality" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar activeIndex={1} />
			<main className={styles.main}>
			<h1>Congratulations! You&apos;ve made it to the second page!</h1>
			<div className={styles.imageWrapper}>
				<Image src="/furalitylogo.png" alt="Furality" width={400} height={400} />
			</div>
			</main>
		</>
	)
}
