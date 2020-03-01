import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
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

function CustomCheckbox(props) {
  const { color, ...otherProps } = props
  return <Checkbox color={color || colors.primary} {...otherProps} />
}
export default withStyles(style)(CustomCheckbox)
