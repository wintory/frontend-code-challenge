import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Colors } from '../../constants/color'

export const Wrapper = styled(Grid)`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${Colors.White};
  height: 60px;

  .MuiTextField-root {
    width: 100%;
    height: 100%;
  }
`
