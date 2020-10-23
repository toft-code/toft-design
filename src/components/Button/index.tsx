import React from 'react'
import './index.scss'

type Props = {}

const Button: React.FC<Props> = (props) => {
  const { children } = props

  return <button className='button'>{children}</button>
}

export default Button
