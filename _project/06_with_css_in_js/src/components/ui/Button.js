import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: 300ms ease;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  &:active span {
    transform: scale(0.9);
  }
`

function Button(props) {
  const {
    background,
    color,
    children,
    type,
    ...otherProps
  } = props

  return (
    <ButtonStyled
      type={type}
      background={background}
      color={color}
      {...otherProps}
    >
      <span>{children}</span>
    </ButtonStyled>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  background: colors.primary,
  color: colors.white,
  type: 'button',
}

export default Button
