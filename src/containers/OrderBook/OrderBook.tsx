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
          <th>Price</th>
          <th>Amount</th>
          {buy.map(buyOrder => (
            <tr>
              <td>{buyOrder.price}</td> <td>{buyOrder.amount}</td>
            </tr>
          ))}
        </OrderTable>
      </OrderListBox>
      <Divider light />
      <OrderListBox>
        <OrderTable color={Colors.Elm}>
          <th>Price</th>
          <th>Amount</th>
          {sell.map(sellOrder => (
            <tr>
              <td>{sellOrder.price}</td> <td>{sellOrder.amount}</td>
            </tr>
          ))}
        </OrderTable>
      </OrderListBox>
    </Wrapper>
  )
}

export default OrderBook
