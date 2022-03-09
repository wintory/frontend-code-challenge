import { Meta } from '@storybook/react'
import { useState } from 'react'

import Select, { SelectProps } from './Select'

export default {
  component: Select,
  title: 'components/Select',
  argTypes: {
    value: {
      defaultValue: `option-0`,
    },
    options: {
      defaultValue: new Array(10)
        .fill(null)
        .map((value, i) => ({ key: `option-${i}`, value: `option-${i}`, label: `option-${i}` })),
    },
  },
} as Meta

export const Default: React.FC<SelectProps> = ({ options, value }) => {
  const [option, setOption] = useState(value)
  return <Select value={option} options={options} onChange={setOption} />
}
