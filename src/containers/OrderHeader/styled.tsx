import { Grid } from '@mui/material'
import styled from 'styled-components'

export const Logo = styled.img`
  max-height: 50px;

  @media only screen and (max-width: 375px) {
    max-height: 30px;
  }
`
export const Wrapper = styled(Grid)`
  height: 85px;

  @media only screen and (max-width: 375px) {
    height: 60px;
  }
`
