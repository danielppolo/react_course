import React from 'react'
import '../../style/Title.scss'

function Title(props) {
  const { children, color } = props
  return (
    <p
      className="Title"
      style={{ color }}
    >
      {children}
    </p>
  )
}

export default Title
