import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div>
			<h2><Link href="/">Home</Link></h2>
			{children}
		</div>
	)
}
