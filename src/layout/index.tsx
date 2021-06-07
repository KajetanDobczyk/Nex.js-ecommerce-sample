import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import Header from './components/Header'
import * as S from './styles'

type Props = {
  title: string
}

const Layout: NextPage<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>Next E-Commerce Sample – {title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <S.Main>{children}</S.Main>
  </>
)

export default Layout
