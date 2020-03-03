import React from 'react'
import MaterialCheckbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

const style = {
  root: {
    color: colors.gray,
  },
  checked: {
    color: (props) => {
      const color = (props.color) ? props.color : colors.primary
      return color
    },
  },
}

function Checkbox(props) {
  const { color, ...otherProps } = props
  return <MaterialCheckbox color={color} {...otherProps} />
}

Checkbox.propTypes = {
  color: PropTypes.string,
}

Checkbox.defaultProps = {
  color: colors.white,
}

export default withStyles(style)(Checkbox)
