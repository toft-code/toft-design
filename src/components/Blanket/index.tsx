import React from 'react'
import './index.scss'

type Props = {
  visible?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Blanket: React.FC<Props> = (props) => {
  const { onClick, visible = false } = props

  return visible ? <div onClick={onClick} className='blanket'></div> : null
}

export default Blanket
