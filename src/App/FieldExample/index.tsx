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
        <Input></Input>
      </Field>
      <br />
      <Field name='用户名'>
        <Input></Input>
      </Field>

      <h2>textarea with field</h2>
      <Field name='Description'>
        <Textarea></Textarea>
      </Field>
      <br />
      <Field name='描述'>
        <Textarea></Textarea>
      </Field>
    </div>
  )
}

export default FieldExample
