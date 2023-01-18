import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div>
			<h2><Link href="/Users/a123123/WebstormProjects/next-study/nextjs-blog/public">Home</Link></h2>
			{children}
		</div>
	)
}
