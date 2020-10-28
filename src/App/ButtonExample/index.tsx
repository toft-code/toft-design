import React from 'react'
import Button from '../../components/Button'

type Props = {}

const ButtonExample: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Button</h1>
      <h2>Default</h2>
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

      <h2>Primary</h2>
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

      <h2>Secondary</h2>
      <div>
        <span style={{ margin: 10 }}>
          <Button type='secondary' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='secondary'>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='secondary' size='large'>
            Button
          </Button>
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <span style={{ margin: 10 }}>
          <Button disabled type='secondary' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='secondary'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='secondary' size='large'>
            Button
          </Button>
        </span>
      </div>

      <h2>Text</h2>
      <div>
        <span style={{ margin: 10 }}>
          <Button type='text' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='text'>Button</Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button type='text' size='large'>
            Button
          </Button>
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <span style={{ margin: 10 }}>
          <Button disabled type='text' size='small'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='text'>
            Button
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <Button disabled type='text' size='large'>
            Button
          </Button>
        </span>
      </div>
    </div>
  )
}

export default ButtonExample
