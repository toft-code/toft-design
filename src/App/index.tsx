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

      <h3>Default</h3>
      <div>
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
      <div style={{ marginTop: 10 }}>
        <span style={{ margin: 10 }}>
          <Button disabled size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled size='large'>
            Button
          </Button>
        </span>
      </div>

      <h3>Primary</h3>
      <div>
        <span style={{ margin: 10 }}>
          <Button type='primary' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='primary'>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='primary' size='large'>
            Button
          </Button>
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <span style={{ margin: 10 }}>
          <Button disabled type='primary' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='primary'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='primary' size='large'>
            Button
          </Button>
        </span>
      </div>

      {/* Input */}
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

      <h2>Textarea</h2>
      <div style={{ margin: 10 }}>
        <Textarea placeholder='Textarea'></Textarea>
      </div>
      <div style={{ margin: 10 }}>
        <Textarea disabled placeholder='Textarea Disabled'></Textarea>
      </div>

      <h2>Tag</h2>
      <div style={{ margin: 10 }}>
        <Tag>Default</Tag>
        <Tag color='green'>Success</Tag>
        <Tag color='blue'>Info</Tag>
        <Tag color='red'>Error</Tag>
        <Tag color='orange'>Warning</Tag>
      </div>
      <div style={{ margin: 10 }}>
        <Tag border>Default</Tag>
        <Tag border color='green'>
          Success
        </Tag>
        <Tag border color='blue'>
          Info
        </Tag>
        <Tag border color='red'>
          Error
        </Tag>
        <Tag border color='orange'>
          Warning
        </Tag>
      </div>
    </div>
  )
}

export default App
