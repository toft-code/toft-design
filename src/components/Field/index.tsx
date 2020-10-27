import React, { useMemo } from 'react'
import './index.scss'

export type FieldProps = {
  id?: string
  name?: string
  label?: string
  style?: React.CSSProperties
}

const Field: React.FC<FieldProps> = (props) => {
  const { children, label, id, name, style } = props

  const fieldId = useMemo(() => (id ? id : name), [id, name])

  return (
    <div style={style}>
      <label className='field-label' id={`label-${fieldId}`} htmlFor={fieldId}>
        {label || name || id}
      </label>
      <div id={`field-${fieldId}`}>{children}</div>
    </div>
  )
}

export default Field
