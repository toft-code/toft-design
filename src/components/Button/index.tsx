import React from 'react'
import cn from 'classnames'
import './index.scss'

type Props = {
  onClick?: Function
  primary?: boolean
  size?: 'large' | 'normal' | 'small'
}

const Button: React.FC<Props> = (props) => {
  const { children, primary, size } = props

  return (
    <button
      className={cn({
        button: true,
        primary,
        large: size === 'large',
        small: size === 'small',
      })}>
      {children}
    </button>
  )
}

export default Button
