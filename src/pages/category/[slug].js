import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
	const router = useRouter();
	const { slug, from } = router.query;

	return (
		<>
			<h1 className={styles.title}>Category {slug} from {from}</h1>
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
