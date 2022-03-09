import { FC, useEffect, useState } from 'react'

import { ZIPMEX_LOGO } from '../constants/image'

import useOrderBookStream from '../containers/OrderBook/hooks/useOrderBookStream'
import OrderBook from '../containers/OrderBook/OrderBook'
import OrderForm from '../containers/OrderForm/OrderForm'

import { TOrderBookStream } from '../types/orderBook'
import { TOrderForm } from '../types/orderForm'

const OrderList: FC = () => {
  const [orderBook, setOrderBook] = useState<TOrderBookStream>({
    buy: [],
    sell: [],
  })
  const { subscribe, addOrder } = useOrderBookStream()

  useEffect(() => {
    subscribe((data: TOrderBookStream) => {
      setOrderBook(data)
    })

    // Todo: setup lint to ignore react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmitOrder: TOrderForm['submitOrder'] = (side, { price, amount }) => {
    addOrder(side, { price, amount })
  }

  return (
    <>
      <header className='App-header'>
        <img src={ZIPMEX_LOGO} className='App-logo' alt='logo' />
      </header>
      <OrderForm submitOrder={handleSubmitOrder} />
      <OrderBook buy={orderBook.buy} sell={orderBook.sell} />
    </>
  )
}

export default OrderList
