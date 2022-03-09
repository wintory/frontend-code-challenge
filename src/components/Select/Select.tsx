import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import DefaultSelect from '@mui/material/Select'

import { Option } from '../../types/option'
import { SelectChangeEvent } from '@mui/material'

export interface SelectProps {
  value: any
  onChange: (value: string) => void
  options: Option[]
}

const Select: FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string)
  }

  return (
    <DefaultSelect value={value} onChange={handleChange}>
      {options.map(({ key, label, value }) => (
        <MenuItem key={key} value={value}>
          {label}
        </MenuItem>
      ))}
    </DefaultSelect>
  )
}

export default Select
