import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const DividerStyled = styled.div`
  width: 100%;
`
function Divider(props) {
  const {
    color,
    stroke,
    verticalMargin,
  } = props

  return (
    <DividerStyled
      style={{
        borderBottom: `${stroke}px solid ${color}`,
        margin: `${verticalMargin}px 0`,
      }}
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
