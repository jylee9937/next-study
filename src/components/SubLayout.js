import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <div>
      <h2>
        <Link href="/" className="title">
          Home
        </Link>
      </h2>
      {children}
    </div>
  )
}
