import React from 'react'

function ErrorRed(props) {
  return (
    <div className='error' >
        {props.children}
    </div>
  )
}

export default ErrorRed