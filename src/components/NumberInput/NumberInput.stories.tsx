import { Meta } from '@storybook/react'

import NumberInput, { InputProps } from './NumberInput'

export default {
  component: NumberInput,
  title: 'components/NumberInput',
} as Meta

export const Default: React.FC<InputProps> = ({
  min,
  max,
  decimal,
  placeholder,
  allowNegative,
}) => (
  <NumberInput
    min={min}
    allowNegative={allowNegative}
    max={max}
    decimal={decimal}
    placeholder={placeholder}
    type='number'
  />
)
