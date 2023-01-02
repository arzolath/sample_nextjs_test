import Head from 'next/head'
import styles from '../styles/Page1.module.css'
import Navbar from './navbar'

export default function Page1() {
	return (
		<>
			<Head>
				<title>Sample NextJS Test</title>
				<meta name="description" content="Challange project for Furality" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar activeIndex={0} />
			<main className={styles.main}>
				<h1>Arzolath</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nisl id lorem porttitor blandit. Donec at scelerisque augue, ut aliquam mi. Aenean quis aliquam urna. Morbi eget mollis lorem. Duis tempor bibendum ipsum, et fringilla risus dictum in. Proin in fringilla libero. Nulla at bibendum eros. Quisque facilisis faucibus nunc vel eleifend. Nunc nulla eros, hendrerit et velit non, placerat consequat sem. Aliquam felis urna, dictum gravida fringilla sed, aliquam ut felis. Curabitur gravida enim dui.
				</p>
			</main>
		</>
	)
}
