import React from 'react'
import '../../style/Header.scss'
import PropTypes from 'prop-types'

function Header(props) {
  const {
    left,
    right,
    children,
    onLeft,
    onRight,
  } = props

  return (
    <div
      className="Header"
    >
      <div className="Header-left" onClick={onLeft}>
        {left}
      </div>
      <div className="Header-center">
        {children}
      </div>
      <div className="Header-right" onClick={onRight}>
        {right}
      </div>
    </div>
  )
}

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
}

Header.defaultProps = {
  left: null,
  right: null,
  onLeft: null,
  onRight: null,
}

export default Header
