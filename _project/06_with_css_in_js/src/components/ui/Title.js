import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const TitleStyled = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`

function Title(props) {
  const { children, color } = props
  return (
    <TitleStyled>
      {children}
    </TitleStyled>
  )
}

Title.propTypes = {
  color: PropTypes.string,
}

Title.defaultProps = {
  color: colors.black,
}


export default Title
