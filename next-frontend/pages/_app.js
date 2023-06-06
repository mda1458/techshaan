import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>TechShaan</title>
      <meta name="description" content="TechShaan is a blog website where you can find all the latest tech news and updates." />
      <meta name="keywords" content="TechShaan, Tech, Shaan, Tech News, Tech Updates, Tech Blog" />
      <meta name="author" content="Muhammad DAnish" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
