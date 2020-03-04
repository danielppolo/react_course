import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  min-height: 40px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .center {
    flex: 1;
    text-align: center;
  }
`
function Header(props) {
  const {
    left,
    right,
    children,
    onLeft,
    onRight,
  } = props

  return (
    <HeaderStyled>
      <div className="left" onClick={onLeft}>
        {left}
      </div>
      <div className="center">
        {children}
      </div>
      <div className="right" onClick={onRight}>
        {right}
      </div>
    </HeaderStyled>
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
