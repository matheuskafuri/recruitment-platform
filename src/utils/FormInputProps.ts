import { FieldError } from 'react-hook-form'

export interface Options {
  label: string
  value: string | number | boolean
  hidden?: boolean
  displayOrder?: number
}

export interface FormInputProps {
  label: string
  name: string
  control: any
  setValue?: any
  error?: FieldError
  type?: string
  options?: Options[]
  backgroundColor?: string
}
