import React from 'react'
import './index.scss'

type Props = {
  placeholder?: string
  size?: 'large' | 'normal' | 'small'
}

const Input: React.FC<Props> = (props) => {
  const { size, placeholder } = props
  let className = 'input'

  if (size === 'large') {
    className += ' large'
  }

  if (size === 'small') {
    className += ' small'
  }

  return <input placeholder={placeholder} className={className} type='text' />
}

export default Input
