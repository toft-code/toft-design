import React from 'react'
import './index.scss'

type Props = {
  disabled?: boolean
  placeholder?: string
}

const Textarea: React.FC<Props> = (props) => {
  const { placeholder, disabled } = props

  return (
    <textarea
      disabled={disabled}
      placeholder={placeholder}
      className='textarea'
      cols={50}
      rows={4}></textarea>
  )
}

export default Textarea
