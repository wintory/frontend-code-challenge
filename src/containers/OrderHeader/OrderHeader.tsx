import { FC } from 'react'
import { ZIPMEX_LOGO } from '../../constants/image'

const OrderHeader: FC = () => {
  return (
    <header className='App-header'>
      <img src={ZIPMEX_LOGO} className='App-logo' alt='logo' />
    </header>
  )
}

export default OrderHeader
