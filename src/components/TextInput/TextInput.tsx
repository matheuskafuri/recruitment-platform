import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../utils/FormInputProps'

interface TextInputProps extends FormInputProps {
  width?: number | string
  readonly?: boolean
  variant?: 'standard' | 'outlined' | 'filled'
}

const TextInput = ({ name, label, control, type, width, readonly, variant, backgroundColor }: TextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={formState.errors[name] && error ? error.message : ''}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant={variant ? variant : 'outlined'}
          type={type}
          sx={{
            width: width && width,
            backgroundColor: backgroundColor && backgroundColor,
            borderRadius: '16px',
          }}
          inputProps={{
            sx: {
              color: backgroundColor === 'primary.contrastText' ? '#000' : 'text.primary',
            }
          }}
          disabled={readonly}
        />
      )
      }
    />
  )
}

export { TextInput }
