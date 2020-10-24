import React from 'react'
import cn from 'classnames'
import './index.scss'

export type TagProps = {
  color?: string
  border?: boolean
}

const Tag: React.FC<TagProps> = (props) => {
  const { children, border, color = 'default' } = props

  return (
    <span
      className={cn({
        tag: true,
        border,
        [color]: true,
      })}>
      {children}
    </span>
  )
}

export default Tag
