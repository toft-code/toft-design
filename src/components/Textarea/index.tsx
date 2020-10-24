import React from 'react'
import './index.scss'

type Props = {
  placeholder?: string
}

const Textarea: React.FC<Props> = (props) => {
  const { placeholder } = props
  return (
    <textarea
      placeholder={placeholder}
      className='textarea'
      cols={50}
      rows={6}></textarea>
  )
}

export default Textarea
