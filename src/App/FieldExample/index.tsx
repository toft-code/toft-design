import React from 'react'
import Field from '../../components/Field'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'

type Props = {}

const FieldExample: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Field</h1>
      <h2>input with field</h2>
      <Field name='Username'>
        <Input placeholder='Please Input Username'></Input>
      </Field>

      <h2>textarea with field</h2>
      <Field name='Description'>
        <Textarea placeholder='Please Input Description'></Textarea>
      </Field>
    </div>
  )
}

export default FieldExample
