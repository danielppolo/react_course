import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'

const TextFieldStyled = styled.div`
  p {
    color: #888;
    font-size: 0.8em;
    margin: 0;
  }
  input {
    font-size: 16px;
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }
`

function TextField(props) {
  const {
    label,
    value,
    color,
  } = props

  return (
    <TextFieldStyled>
      <p>{label}</p>
      <input
        type="text"
        value={value}
        style={{
          caretColor: color,
        }}
        {...props}
      />
    </TextFieldStyled>
  )
}

TextField.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
}

TextField.defaultProps = {
  color: colors.primary,
  label: '',
}


export default TextField
