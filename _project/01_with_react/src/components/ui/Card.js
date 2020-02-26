import React from 'react'
import '../../style/Card.css'

function Card(props) {
  const {
    radius,
    depth,
    color,
    children,
  } = props

  return (
    <div
      className="Card"
      style={{
        borderRadius: radius || 4,
        backgroundColor: color || 'white',
        boxShadow: '0 5px 10px #333',
      }}
    >
      {children}
    </div>
  )
}

export default Card
