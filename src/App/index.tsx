import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import './index.css'

function App() {
  return (
    <div className='App bodyContainer'>
      {/* Button */}
      <h1>Button</h1>

      <div>
        <span style={{ margin: 10 }}>
          <Button primary size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button primary>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button primary size='large'>
            Button
          </Button>
        </span>

        <span style={{ margin: 10 }}>
          <Button size='small'>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button size='large'>Button</Button>
        </span>
      </div>

      {/* Input */}
      <h1>Input</h1>
      <div>
        <div style={{ margin: 10 }}>
          <Input size='small' placeholder='Small Input'></Input>
        </div>
        <div style={{ margin: 10 }}>
          <Input placeholder='Normal Input'></Input>
        </div>
        <div style={{ margin: 10 }}>
          <Input size='large' placeholder='Large Input'></Input>
        </div>
      </div>

      <h1>Textarea</h1>
      <div style={{ margin: 10 }}>
        <Textarea placeholder='Textarea'></Textarea>
      </div>
    </div>
  )
}

export default App
