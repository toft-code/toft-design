import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import './index.css'

function App() {
  return (
    <div className='App bodyContainer'>
      {/* Button */}
      <h1>Button</h1>

      <div>
        <span style={{ margin: 8 }}>
          <Button primary size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 8 }}>
          <Button primary>Button</Button>
        </span>
        <span style={{ margin: 8 }}>
          <Button primary size='large'>
            Button
          </Button>
        </span>

        <span style={{ margin: 8 }}>
          <Button size='small'>Button</Button>
        </span>
        <span style={{ margin: 8 }}>
          <Button>Button</Button>
        </span>
        <span style={{ margin: 8 }}>
          <Button size='large'>Button</Button>
        </span>
      </div>

      {/* Input */}
      <h1>Input</h1>
      <Input placeholder='Please Input'></Input>

      <h1>Tag</h1>
    </div>
  )
}

export default App
