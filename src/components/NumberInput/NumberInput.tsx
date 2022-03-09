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
  placeholder?: string
  allowNegative?: boolean
}

const NumberInput: FC<InputProps> = ({
  min,
  max,
  name,
  value,
  onChange,
  decimal,
  error,
  placeholder,
  allowNegative = false,
}) => {
  // Todo: apply debounce value to this component
  const handleChange = (values: NumberFormatValues) => {
    if (onChange) onChange(values.value)
  }

  return (
    <NumberFormat
      value={value}
      placeholder={placeholder}
      customInput={TextField}
      error={!isEmpty(error)}
      helperText={error}
      decimalScale={decimal}
      allowNegative={allowNegative}
      name={name}
      min={min}
      max={max}
      thousandSeparator
      onValueChange={handleChange}
    />
  )
}

export default NumberInput
