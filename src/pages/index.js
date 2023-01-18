import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import Link from "next/link";

export async function getServerSideProps(){
	console.log("server");
	return{
		props: {
			time: new Date().toISOString()
		}
	}

}

export default function Home({ time }) {
  return (
	  <>
		  <h1 className={styles.title}>
			  {time}
		  </h1>
		  <h2><Link href="/src/pages/csr">CSR로</Link></h2>
		  <h2><Link href="/src/pages/ssg">SSG로</Link></h2>
	  </>
  )
}
