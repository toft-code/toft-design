import React from 'react'
import cn from 'classnames'
import './index.scss'

type Props = {
  disabled?: boolean
  onClick?: Function
  type?: 'default' | 'primary' | 'text'
  size?: 'large' | 'normal' | 'small'
}

const Button: React.FC<Props> = (props) => {
  const { children, type = 'default', size, disabled = false } = props

  return (
    <button
      disabled={disabled}
      className={cn({
        button: true,
        primary: type === 'primary',
        default: type === 'default',
        text: type === 'text',
        disabled,
        large: size === 'large',
        small: size === 'small',
      })}>
      {children}
    </button>
  )
}

export default Button
