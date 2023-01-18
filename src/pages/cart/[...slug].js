import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";

export default function CartSlug() {

	return (
		<>
			<h1 className={styles.title}>Cart Slug</h1>
		</>
	)
}

CartSlug.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>{page}</SubLayout>
		</Layout>
	)
}
