import { FC } from 'react'
import { TextField } from '@mui/material'
import isEmpty from 'lodash/isEmpty'
import NumberFormat, { NumberFormatValues } from 'react-number-format'

export interface InputProps {
  type: 'number' | 'text'
  min?: number
  max?: number
  name?: string
  onChange?: (value: string) => void
  decimal?: number
  error?: string
  value?: string | number
}

const NumberInput: FC<InputProps> = ({ min, max, name, value, onChange, decimal, error }) => {
  const handleChange = (values: NumberFormatValues) => {
    if (onChange) onChange(values.value)
  }

  return (
    <NumberFormat
      value={value}
      customInput={TextField}
      label={name}
      error={!isEmpty(error)}
      helperText={error}
      decimalScale={decimal}
      name={name}
      inputProps={{ min, max }}
      thousandSeparator
      onValueChange={handleChange}
    />
  )
}

export default NumberInput
