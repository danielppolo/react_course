import React from 'react'
import '../../style/Task.scss'
import moment from 'moment'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'
import Checkbox from './Checkbox'

function Task(props) {
  const {
    label,
    date,
    done,
    color,
  } = props

  const momentDate = moment(date)
  const isAfter = momentDate.isAfter(moment())
  return (
    <div className="Task">
      <div
        className="Task-text"
        style={{
          opacity: done ? 0.5 : 1,
        }}
      >
        <p
          className="Task-label"
          style={{
            textDecoration: done && 'line-through',
          }}
        >
          {label}

        </p>
        <p
          className="Task-date"
          style={{
            color: !done && !isAfter && colors.danger,
          }}
        >
          {momentDate.format('HH:mm MMMM D')}

        </p>
      </div>
      <Checkbox checked={done} color={color} />
    </div>
  )
}


Task.propTypes = {
  color: PropTypes.string,
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

Task.defaultProps = {
  color: colors.primary,
}

export default Task
