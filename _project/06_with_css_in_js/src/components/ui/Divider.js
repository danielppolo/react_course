import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const DividerStyled = styled.div`
  width: 100%;
  border-bottom: ${(props) => props.stroke}px solid ${(props) => props.color};
  margin: ${(props) => props.color}px 0;
`
function Divider(props) {
  const {
    color,
    stroke,
    verticalMargin,
  } = props

  return (
    <DividerStyled
      stroke={stroke}
      color={color}
    />
  )
}

Divider.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.number,
  verticalMargin: PropTypes.number,
}

Divider.defaultProps = {
  color: colors.gray,
  stroke: 1,
  verticalMargin: 0,
}

export default Divider
