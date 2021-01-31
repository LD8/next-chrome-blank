import Head from 'next/head'

const HeadContent = ({ text }) => {
  return (
    <Head>
      <title>{text}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default HeadContent
