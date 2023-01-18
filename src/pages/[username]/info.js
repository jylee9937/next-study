import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";

export default function UsernameInfo() {

	return (
		<>
			<h1 className={styles.title}>Username Info</h1>
		</>
	)
}

UsernameInfo.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>{page}</SubLayout>
		</Layout>
	)
}
