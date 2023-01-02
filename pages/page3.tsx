import Head from 'next/head'
import styles from '../styles/Page3.module.css'
import Navbar from './navbar'

export default function Page3(){
	return (
		<>
			<Head>
			<title>Sample NextJS Test</title>
			<meta name="description" content="Challange project for Furality" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar activeIndex={2} />
			<main className={styles.main}>
			<h1>Page number three</h1>
			<div className={styles.formWrapper}>
				<form action="" method="POST">
					<div className={styles.formRow}>
						<label htmlFor="email">Email Address:</label>
						<input className={styles.field} type="text" id="email" name="email" required />
					</div>
					<div className={styles.formRow}>
						<label htmlFor="email">Receive daily good morning messages:</label>
						<div className={styles.formInline}>
							<label htmlFor="yes">Yes</label>
							<input type="radio" id="yes" name="dailyMessages" value="1" required onChange={(e) => {}} />
						</div>
						<div className={styles.formInline}>
							<label htmlFor="no">No</label>
							<input type="radio" id="no" name="dailyMessages" value="0" required onChange={(e) => {}} />
						</div>
					</div>
					<div className={styles.formRow + " " + styles.right}>
						<button className={styles.button} type="submit" id="submit">Send</button>
					</div>
				</form>
			</div>
			</main>
		</>
	)
}
