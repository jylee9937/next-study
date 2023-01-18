import styles from '../../styles/Home.module.css';
import Link from "next/link";
import {useEffect, useState} from "react";
import Layout from "../component/Layout";
import SubLayout from "../component/SubLayout";

export default function CSR() {
	const [time, setTime] = useState();
	useEffect(()=> {
		setTime(new Date().toISOString())
	}, [])
	return (
		<>
			<h1 className={styles.title}>
				{time}
			</h1>
			<h2><Link href="/src/pages">Home</Link></h2>
			<h2><Link href="/src/pages/ssg">SSG로</Link></h2>
			<h2><Link href="/src/pages/isr">ISR로</Link></h2>
		</>
	)
}

CSR.getLayout = function getLayout(page){
	return(
		<Layout>
			<SubLayout>
				{page}
			</SubLayout>
		</Layout>
	)
}
