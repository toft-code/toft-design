import React from 'react'
import Tag from '../../components/Tag'

type Props = {}

const TagExample: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Tag</h2>
      <h3>Default</h3>
      <div style={{ margin: 10 }}>
        <Tag>Default</Tag>
        <Tag color='green'>Success</Tag>
        <Tag color='blue'>Info</Tag>
        <Tag color='red'>Error</Tag>
        <Tag color='orange'>Warning</Tag>
      </div>
      <h3>Border</h3>
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

export default TagExample
