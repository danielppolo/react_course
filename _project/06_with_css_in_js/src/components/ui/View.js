import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

const ViewStyled = styled.div`
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

function View(props) {
  const { children, background, margin } = props
  return (
    <ViewStyled
      style={{
        backgroundColor: background,
        padding: margin,
      }}
    >
      {children}
    </ViewStyled>
  )
}

View.propTypes = {
  background: PropTypes.string,
  margin: PropTypes.number,
}

View.defaultProps = {
  background: colors.lightGray,
  margin: 16,
}

export default View
