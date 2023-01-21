import styles from 'styles/Home.module.css'
import Link from 'next/link'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export async function getStaticProps() {
  console.log('server')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <h2>
        <Link href="/isr">ISR로</Link>
      </h2>
    </>
  )
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
