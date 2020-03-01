import React from 'react'
import '../../style/Title.scss'

function Title(props) {
  const { children } = props
  return <p className="Title">{children}</p>
}

export default Title
