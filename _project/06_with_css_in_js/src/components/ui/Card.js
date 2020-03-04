import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const CardStyled = styled.div`
  box-shadow: 0 1px 10px rgba(0,0,0,.05);
  box-sizing: border-box;
  transition: 300ms ease;
  padding: ${(props) => props.padding}px;
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.background};
  &:active  {
    box-shadow: 0 0 1px rgba(0,0,0,0.05);
  }
`

function Card(props) {
  const {
    radius,
    color,
    children,
    padding,
    style,
  } = props

  return (
    <CardStyled
      padding={padding}
      radius={radius}
      background={color}
      style={style}
    >
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  radius: PropTypes.number,
  color: PropTypes.string,
  padding: PropTypes.number,
  style: PropTypes.object,
}

Card.defaultProps = {
  radius: 4,
  color: colors.white,
  padding: 16,
  style: {},
}

export default Card
