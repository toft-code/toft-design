import React from 'react'
import './index.scss'

type Props = {
  onClick?: Function
  primary?: boolean
  size?: 'large' | 'normal' | 'small'
}

const Button: React.FC<Props> = (props) => {
  const { children, primary, size } = props

  let className = 'button'

  if (primary) {
    className += ' primary'
  }

  if (size === 'large') {
    className += ' large'
  }

  if (size === 'small') {
    className += ' small'
  }

  return <button className={className}>{children}</button>
}

export default Button
