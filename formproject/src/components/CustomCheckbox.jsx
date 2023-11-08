import { useField } from 'formik'
import React from 'react'

function CustomCheckbox ({label,...props}) {
    const [field,meta] = useField(props)
  return (
    <>
    <label htmlFor="">{label}</label>
    <input  {...field }{...props}
    className={meta.error ?'input-error' : ''} />
    
    {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomCheckbox