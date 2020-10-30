import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export type NavProps = {}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className='nav'>
      <ul>
        <Link to='/'>
          <li className='nav-item'>Home</li>
        </Link>
        <Link to='/button'>
          <li className='nav-item'>Button</li>
        </Link>
        <Link to='/input'>
          <li className='nav-item'>Input</li>
        </Link>
        <Link to='/textarea'>
          <li className='nav-item'>Textarea</li>
        </Link>
        <Link to='/field'>
          <li className='nav-item'>Field</li>
        </Link>
        <Link to='/blanket'>
          <li className='nav-item'>Blanket</li>
        </Link>
        <Link to='/tag'>
          <li className='nav-item'>Tag</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
