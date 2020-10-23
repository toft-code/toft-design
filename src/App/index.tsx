import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import './index.css'

function App() {
  return (
    <div className='App bodyContainer'>
      <h1>Button</h1>
      <Button primary>Button</Button>
      <div style={{ marginTop: 10 }}></div>
      <Button>Button</Button>

      <h1>Input</h1>
      <Input placeholder='Please Input'></Input>
    </div>
  )
}

export default App
