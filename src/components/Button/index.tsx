import React from 'react'
import './index.scss'

type Props = {
  onClick?: Function
  primary?: boolean
}

const Button: React.FC<Props> = (props) => {
  const { children, primary } = props

  let className = 'button'

  if (primary) {
    className += ' primary'
  }

  return <button className={className}>{children}</button>
}

export default Button
