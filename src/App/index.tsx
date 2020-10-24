import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Tag from '../components/Tag'
import Textarea from '../components/Textarea'
import './index.css'

function App() {
  return (
    <div className='App bodyContainer'>
      <h1>Toft Design</h1>
      {/* Button */}
      <h2>Button</h2>

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
      <h2>Input</h2>
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

      <h2>Textarea</h2>
      <div style={{ margin: 10 }}>
        <Textarea placeholder='Textarea'></Textarea>
      </div>

      <h2>Tag</h2>
      <span style={{ margin: 10 }}>
        <Tag>Default</Tag>
        <Tag color='green'>Success</Tag>
        <Tag color='blue'>Info</Tag>
        <Tag color='red'>Error</Tag>
        <Tag color='orange'>Warning</Tag>
      </span>
    </div>
  )
}

export default App
