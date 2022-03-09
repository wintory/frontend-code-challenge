import { useEffect, useState } from 'react'

import OrderBook from './containers/OrderBook/OrderBook'
import OrderForm from './containers/OrderForm/OrderForm'
import useOrderBookStream from './containers/OrderBook/hooks/useOrderBookStream'

import { ZIPMEX_LOGO } from './constants/image'

import { TOrderBookStream } from './types/orderBook'
import { TOrderForm } from './types/orderForm'

const App = () => {
  const [orderBook, setOrderBook] = useState<TOrderBookStream>({
    buy: [],
    sell: [],
  })
  const { subscribe, addOrder } = useOrderBookStream()

  useEffect(() => {
    subscribe((data: TOrderBookStream) => {
      setOrderBook(data)
    })
  }, [])

  const handleSubmitOrder: TOrderForm['submitOrder'] = (side, { price, amount }) => {
    addOrder(side, { price, amount })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={ZIPMEX_LOGO} className='App-logo' alt='logo' />
      </header>
      <OrderForm submitOrder={handleSubmitOrder} />
      <OrderBook buy={orderBook.buy} sell={orderBook.sell} />
    </div>
  )
}

export default App
