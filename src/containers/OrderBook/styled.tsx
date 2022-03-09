import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Colors } from '../../constants/color'

export const OrderListBox = styled.div`
  width: 100%;
`
export const OrderTable = styled.table`
  width: 100%;
  text-align: center;

  th,
  td {
    padding: 10px;
  }

  th {
    background-color: ${Colors.BigStone};
  }

  td:first-child {
    color: ${props => props.color};
  }
`

export const Wrapper = styled(Grid)`
  // removed header and footer
  height: calc(100vh - 85px - 60px);
  overflow-y: auto;

  @media only screen and (max-width: 375px) {
    // removed header and footer
    height: calc(100vh - 60px - 60px);
  }
`
