import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  console.log('server')
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h2>
        <Link href="/src/pages">Home</Link>
      </h2>
      <h2>
        <Link href="/src/pages/ssg">SSG로</Link>
      </h2>
    </>
  )
}
