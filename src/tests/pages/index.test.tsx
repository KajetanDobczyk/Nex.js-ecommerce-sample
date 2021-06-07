import { findAllByRole, screen } from '@testing-library/dom'
import { GetServerSidePropsContext } from 'next'

import { mockedProducts } from 'src/modules/Products/mocks'
import Home, { getServerSideProps } from 'src/pages/index'

import { renderWithProviders } from '../test-utils'

describe('Home page', () => {
  test('getServerSideProps should return products list in props', async () => {
    const serverSideProps = await getServerSideProps(
      {} as GetServerSidePropsContext,
    )

    expect(serverSideProps).toEqual(
      expect.objectContaining({
        props: {
          products: mockedProducts,
        },
      }),
    )
  })

  test('Page displays all products', async () => {
    renderWithProviders(<Home products={mockedProducts} />)

    const products = await screen.findAllByRole('listitem')
    expect(products).toHaveLength(3)
  })
})
