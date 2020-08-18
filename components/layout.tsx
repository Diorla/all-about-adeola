import Head from 'next/head'
import Header from "./header"
import Container from "./container"
import { ReactNode } from 'react'

export default function Layout(props: { children: ReactNode, title?: string }) {
  const { children, title = "Adeola Ade" } = props;
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(title)}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fucarecdn.com%2F79dc47ef-1afc-4bcb-bb35-167d1bb8348b%2Fadeola.jpg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>{children}</main>
    </Container>
  )
}