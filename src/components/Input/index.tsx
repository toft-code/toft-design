import React from 'react'
import cn from 'classnames'
import './index.scss'

export type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: 'large' | 'normal' | 'small'
}

const Input: React.FC<InputProps> = (props) => {
  const { size, placeholder, onChange } = props

  return (
    <input
      className={cn({
        input: true,
        large: size === 'large',
        small: size === 'small',
      })}
      onChange={onChange}
      placeholder={placeholder}
      type='text'
    />
  )
}

export default Input
