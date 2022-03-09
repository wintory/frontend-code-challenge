import React, { useState } from 'react'
import { Button } from '@mui/material'

import NumberInput from '../../components/NumberInput/NumberInput'
import { TOrderForm, TOrderFormData } from '../../types/orderForm'
import Select from '../../components/Select/Select'
import { SideOption } from '../../constants/option'

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
    <div>
      <Select options={SideOption} value={formData.side} onChange={handleSideChange} />
      <NumberInput name='price' value={formData.price} type='number' onChange={handlePriceChange} />
      <NumberInput
        name='amount'
        value={formData.amount}
        type='number'
        onChange={handleAmountChange}
      />
      <Button onClick={handleSubmit} variant='outlined' color='error'>
        Submit Order
      </Button>
    </div>
  )
}

export default OrderForm
