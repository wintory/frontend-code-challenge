import { Divider } from '@mui/material'
import { FC } from 'react'
import { Colors } from '../../constants/color'
import { TOrderBookStream } from '../../types/orderBook'
import { OrderListBox, OrderTable, Wrapper } from './styled'

const OrderBook: FC<TOrderBookStream> = ({ buy, sell }) => {
  return (
    <Wrapper
      item
      display='block'
      color={Colors.White}
      bgcolor={Colors.Ebony}
      justifyContent='center'
    >
      <OrderListBox>
        <OrderTable color={Colors.Mandy}>
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {sell.map(sellOrder => (
              <tr key={sellOrder.price + sellOrder.amount}>
                <td>{sellOrder.price}</td>
                <td>{sellOrder.amount}</td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </OrderListBox>
      <Divider light />
      <OrderListBox>
        <OrderTable color={Colors.Elm}>
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {buy.map(buyOrder => (
              <tr key={buyOrder.price + buyOrder.amount}>
                <td>{buyOrder.price}</td>
                <td>{buyOrder.amount}</td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </OrderListBox>
    </Wrapper>
  )
}

export default OrderBook
