import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'

import NumberInput from '../../components/NumberInput/NumberInput'
import { TOrderForm, TOrderFormData } from '../../types/orderForm'
import Select from '../../components/Select/Select'
import { SideOption } from '../../constants/option'
import { Colors } from '../../constants/color'
import { Wrapper } from './styled'

const OrderForm: React.FC<TOrderForm> = ({ submitOrder }) => {
  const initialFormData: TOrderFormData = {
    side: 'buy',
    price: '',
    amount: '',
  }
  const [formData, updateFormData] = useState<TOrderFormData>(initialFormData)

  const handleChange = (field: string, value: string) => {
    updateFormData({
      ...formData,
      [field]: value.trim(),
    })
  }

  const handlePriceChange = (value: string) => handleChange('price', value)
  const handleAmountChange = (value: string) => handleChange('amount', value)
  const handleSideChange = (value: string) => handleChange('side', value)

  const handleSubmit = () => {
    submitOrder(formData.side, {
      price: formData.price,
      amount: formData.amount,
    })

    updateFormData(initialFormData)
  }

  return (
    <Wrapper>
      <Select options={SideOption} value={formData.side} onChange={handleSideChange} />
      <NumberInput
        name='price'
        placeholder='price'
        value={formData.price}
        allowNegative={false}
        type='number'
        onChange={handlePriceChange}
      />
      <NumberInput
        name='amount'
        min={0}
        placeholder='amount'
        allowNegative={false}
        value={formData.amount}
        type='number'
        onChange={handleAmountChange}
      />
      <Button onClick={handleSubmit} variant='outlined' color='error'>
        Submit Order
      </Button>
    </Wrapper>
  )
}

export default OrderForm
