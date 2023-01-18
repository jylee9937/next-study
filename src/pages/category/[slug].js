import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";

export default function CategorySlug() {

	return (
		<>
			<h1 className={styles.title}>Category Slug</h1>
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
