import Head from 'next/head'

import ProductsList from 'src/modules/Products/containers/ProductsList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next E-commerce Sample</title>
        <meta name="description" content="Created by Kajetan Dobczyk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsList />
    </>
  )
}
