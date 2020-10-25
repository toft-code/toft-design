import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ButtonExample from './ButtonExample'
import InputExample from './InputExample'
import './index.css'
import TagExample from './TagExample'
import TextareaExample from './TextareaExample'
import MainTitle from './MainTitle'

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/button'>Button</Link>
            </li>
            <li>
              <Link to='/input'>Input</Link>
            </li>
            <li>
              <Link to='/textarea'>Textarea</Link>
            </li>
            <li>
              <Link to='/tag'>Tag</Link>
            </li>
          </ul>
        </nav>

        <div className='bodyContainer'>
          <Switch>
            <Route path='/button'>
              <ButtonExample></ButtonExample>
            </Route>
            <Route path='/input'>
              <InputExample></InputExample>
            </Route>
            <Route path='/tag'>
              <TagExample></TagExample>
            </Route>
            <Route path='/textarea'>
              <TextareaExample></TextareaExample>
            </Route>
            <Route path='/'>
              <MainTitle></MainTitle>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
