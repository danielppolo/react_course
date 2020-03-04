import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const CircleButtonStyled = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  z-index: 2;
  transition: 300ms ease;
  box-shadow: ${(props) => (props.flat ? 'none' : '0 0 10px rgba(0,0,0,0.4)')};
  border-radius: ${(props) => props.borderRadius}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor}; 
  &:active  {
    box-shadow: 0 0 1px rgba(0,0,0,0);
  }
`
function CircleButton(props) {
  const {
    color,
    children,
    size,
    flat,
    style,
    onClick,
  } = props

  return (
    <CircleButtonStyled
      onClick={onClick}
      backgroundColor={color}
      height={size}
      width={size}
      borderRadius={size / 2}
      flat={flat}
    >
      {children}
    </CircleButtonStyled>
  )
}

CircleButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  flat: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

CircleButton.defaultProps = {
  color: colors.primary,
  size: 60,
  flat: false,
  style: {},
  onClick: null,
}

export default CircleButton
