import { render } from '@testing-library/react'

import OrderList from './OrderList'

describe('OrderList', () => {
  it('should render if exists', () => {
    const { getAllByText } = render(<OrderList />)

    expect(getAllByText('Price')).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { container } = render(<OrderList />)

    expect(container.firstChild).toMatchSnapshot()
  })

  // Todo: add more unit test
})
