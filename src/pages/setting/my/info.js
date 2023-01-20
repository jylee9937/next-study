import styles from 'styles/Home.module.css'
import Layout from "component/Layout";
import SubLayout from "component/SubLayout";
import {useState} from "react";
import {useRouter} from "next/router";

export async function getServerSideProps() {
	console.log('server')
	return {
		props: {},
	}
}

export default function MyInfo() {
	const router = useRouter();
	const [clicked, setClicked] = useState(false);
	const {status = 'initial'} = router.query;
	return (
		<>
			<h1 className="title">My Info</h1>
			<h1 className="title">Clicked: {String(clicked)}</h1>
			<h1 className="title">Status: {status}</h1>
			<br/>
			<button onClick={() => {
				alert("edit");
				setClicked(true)
				location.replace("/setting/my/info?status=replace")
			}}>edit(replace)</button>
			<br/>
			<button onClick={() => {
				alert("edit");
				setClicked(true)
				router.push("/setting/my/info?status=push")
			}}>edit(push)</button>
			<br/>
			<button onClick={() => {
				alert("edit");
				setClicked(true)
				router.push("/setting/my/info?status=shallow", undefined, {shallow: true})
			}}>edit(shallow)</button>
		</>
	)
}

MyInfo.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>{page}</SubLayout>
		</Layout>
	)
}
