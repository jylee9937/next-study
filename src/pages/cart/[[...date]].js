import styles from 'styles/Home.module.css'
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CategorySlug() {
	const router = useRouter();
	const { date } = router.query;

	return (
		<>
			<h1 className={styles.title}>Category {date}</h1>
			<Link href="/cart/2022/06/05">2022년 6월 5일로</Link>
			<br/>
			<button onClick={() => {
				router.push('/cart/2022/06/24')
			}}>2022년 6월 24일로</button>
		</>
	)
}

CategorySlug.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>{page}</SubLayout>
		</Layout>
	)
}
