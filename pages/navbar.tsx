import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar({activeIndex}:any) {
	return (
		<>
			<div className={styles.navbar}>
				<ul>
					<li><Link className={activeIndex === 0 ? styles.active : styles.inactive} href="/">Page 1</Link></li>
					<li><Link className={activeIndex === 1 ? styles.active : styles.inactive} href="/page2">Page 2</Link></li>
					<li><Link className={activeIndex === 2 ? styles.active : styles.inactive} href="/page3">Page 3</Link></li>
				</ul>
			</div>
		</>
	)
}
