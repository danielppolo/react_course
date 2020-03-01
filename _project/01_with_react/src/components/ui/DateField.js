import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers'
import React from 'react'
import DateFnsUtils from '@date-io/moment'
import '../../style/DateField.scss'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import colors from '../../utils/colors'

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
})

function DateField(props) {
  const { label, value } = props
  const handleChange = (value) => {
    console.log(value)
  }
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          margin="normal"
          id="date-picker-dialog"
          label={label}
          inputVariant="standard"
          format="MMM D HH:mm"
          value={value}
          onChange={handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          disablePast
          disableToolbar
          views={['date', 'month', 'hours', 'minutes']}
          showTodayButton
          cancelLabel="Cancel"
          okLabel="Set time"
          todayLabel="Today"
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default DateField
