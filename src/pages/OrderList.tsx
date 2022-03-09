import { FC, useEffect, useState } from 'react'

import OrderBook from '../containers/OrderBook/OrderBook'
import OrderForm from '../containers/OrderForm/OrderForm'
import OrderHeader from '../containers/OrderHeader/OrderHeader'

import useOrderBookStream from '../hooks/useOrderBookStream'

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
      <OrderHeader />
      <OrderBook buy={orderBook.buy} sell={orderBook.sell} />
      <OrderForm submitOrder={handleSubmitOrder} />
    </>
  )
}

export default OrderList
