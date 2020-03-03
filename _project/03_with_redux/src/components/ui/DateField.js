import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers'
import React from 'react'
import DateFnsUtils from '@date-io/moment'
import '../../style/DateField.scss'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import colors from '../../utils/colors'

const defaultMaterialTheme = (props) => createMuiTheme({
  palette: {
    primary: {
      main: props.color || colors.primary,
    },
  },
})

function DateField(props) {
  const { label, value, onChange } = props
  return (
    <ThemeProvider theme={defaultMaterialTheme(props)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          margin="normal"
          id="date-picker-dialog"
          label={label}
          inputVariant="standard"
          format="MMM D HH:mm"
          value={value}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          disablePast
          disableToolbar
          // views={['date', 'month', 'hours', 'minutes']}
          showTodayButton
          cancelLabel="Cancel"
          okLabel="Set time"
          todayLabel="Today"
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

DateField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired,
}

DateField.defaultProps = {
  label: '',
  value: moment(),
}

export default DateField
