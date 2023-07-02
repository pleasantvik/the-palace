import React, { ReactNode, FC } from 'react'
import { Button as MuiButton } from '@mui/material'

interface IProps {
  onClick: (evt?: any) => void
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'success' | 'error'
  variant?: 'contained' | 'outlined' | 'text'
  disabled?: boolean
  type?: 'button' | 'submit'
  sx?: object
}

const Button: FC<IProps> = ({
  size,
  color,
  variant,
  onClick,
  disabled,
  type,
  children,
  ...rest
}) => {
  return (
    <MuiButton
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default Button
