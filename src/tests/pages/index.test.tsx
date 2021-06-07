import { GetServerSidePropsContext } from 'next'

import { mockedProducts } from 'src/modules/Products/mocks'
import { getServerSideProps } from 'src/pages/index'

describe('Home page', () => {
  it('getServerSideProps should return products list in props', async () => {
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
})
