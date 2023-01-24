import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import {getSortedPostsData} from "../lib/posts";
import {useEffect, useState} from "react";

// StudyCase: SSR로 posts들을 요청하는 방법
// export async function getServerSideProps (){
// 	const allPostsData = getSortedPostsData();
//
// 	return({
// 		props: {
// 			allPostsData,
// 		}
// 	})
// }

// StudyCase: SSG로 posts들을 api를 통해서 요청하는 방법
export async function getStaticProps (){
	const response = await fetch("http://localhost:3000/api/posts/posts");
	const json = await response.json();

	return({
		props: {
			allPostsData: json.allPostsData,
		}
	})
}

export default function Home({allPostsData}) {

	// StudyCase: CSR로 posts들을 요청하는 방법
	// const [allPostsData, setAllPostsData] = useState("");
	// useEffect(() => {
	// 		fetch("/api/posts/posts")
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				console.log(data);
	// 				setAllPostsData(data);
	// 			})
	// }, []);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			{/* Add this <section> tag below the existing <section> tag */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData && allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
