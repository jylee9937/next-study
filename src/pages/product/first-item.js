import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";

export default function FirstItem() {

	return (
		<>
			<h1 className={styles.title}>First Item</h1>
		</>
	)
}

FirstItem.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>{page}</SubLayout>
		</Layout>
	)
}
