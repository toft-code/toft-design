import React from 'react'
import Input from '../../components/Input'

type Props = {}

const InputExample: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Input</h2>
      <div>
        <span style={{ margin: 10 }}>
          <Input size='small' placeholder='Small Input'></Input>
        </span>
        <span style={{ margin: 10 }}>
          <Input placeholder='Normal Input'></Input>
        </span>
        <span style={{ margin: 10 }}>
          <Input size='large' placeholder='Large Input'></Input>
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <span style={{ margin: 10 }}>
          <Input
            disabled
            size='small'
            placeholder='Small Input Disabled'></Input>
        </span>
        <span style={{ margin: 10 }}>
          <Input disabled placeholder='Normal Input Disabled'></Input>
        </span>
        <span style={{ margin: 10 }}>
          <Input
            disabled
            size='large'
            placeholder='Large Input Disabled'></Input>
        </span>
      </div>
    </div>
  )
}

export default InputExample
