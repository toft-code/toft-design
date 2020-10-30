import React, { useState } from 'react'
import Blanket from '../../components/Blanket'
import Button from '../../components/Button'

type Props = {}

const BlanketExample: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <h1>Blanket</h1>

      <Button onClick={() => setVisible(true)}>Open Blanket</Button>
      <Blanket visible={visible} onClick={() => setVisible(false)}></Blanket>
    </div>
  )
}

export default BlanketExample
