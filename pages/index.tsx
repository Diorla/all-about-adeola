import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const addHash = (str: string) => `#${str.trim()} `

const apv = [];
apv.length = 100;
apv.fill("Hello darkness my old friend")
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className="">
        <h2 className="">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title, tags }) => (
            <li className="" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
              <div>
                {
                  tags.split(",").map(addHash).map((item: string, idx: string | number) => <span key={idx}>{item}</span>)
                }
              </div>
            </li>
          ))}
        </ul>
        <div>{
          apv.map((item, idx) => <div key={idx}>This is ${idx}</div>)}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
