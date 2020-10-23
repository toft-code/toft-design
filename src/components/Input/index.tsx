import React from 'react'
import './index.scss'

type Props = {
  placeholder: string
}

const Input: React.FC<Props> = (props) => {
  return <input {...props} className='input' type='text' />
}

export default Input
