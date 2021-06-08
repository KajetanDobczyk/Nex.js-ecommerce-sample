import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { config } from 'src/config'

import Header from './components/Header'
import * as S from './styles'

type Props = {
  title?: string
  showBreadcrumbs?: boolean
}

const Layout: NextPage<Props> = ({ children, title, showBreadcrumbs }) => (
  <>
    <Head>
      <title>
        {title ? `${config.documentTitle} – ${title}` : config.documentTitle}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <S.Main>
      {showBreadcrumbs && (
        <S.Breadcrumbs>
          <Link href="/">
            <a>&lt; Go back to products</a>
          </Link>
        </S.Breadcrumbs>
      )}
      {children}
    </S.Main>
  </>
)

export default Layout
