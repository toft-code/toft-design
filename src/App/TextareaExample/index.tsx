import React from 'react'
import Textarea from '../../components/Textarea'

type Props = {}

const TextareaExample: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Textarea</h2>
      <div style={{ margin: 10 }}>
        <Textarea placeholder='Textarea'></Textarea>
      </div>
      <div style={{ margin: 10 }}>
        <Textarea disabled placeholder='Textarea Disabled'></Textarea>
      </div>
    </div>
  )
}

export default TextareaExample
