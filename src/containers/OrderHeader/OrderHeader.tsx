import { FC } from 'react'
import { Grid } from '@mui/material'
import { ZIPMEX_LOGO } from '../../constants/image'
import { Colors } from '../../constants/color'
import { Logo, Wrapper } from './styled'

const OrderHeader: FC = () => {
  return (
    <Wrapper
      display='flex'
      justifyContent='flex-start'
      bgcolor={Colors.Black}
      maxHeight='100px'
      alignItems='center'
    >
      <Grid item padding='16px'>
        <Logo src={ZIPMEX_LOGO} className='App-logo' alt='logo' />
      </Grid>
    </Wrapper>
  )
}

export default OrderHeader
