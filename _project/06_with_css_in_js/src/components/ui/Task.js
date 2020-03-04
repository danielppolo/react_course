import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Checkbox from './Checkbox'

const TaskStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  .text {
    p {
      margin:0;
      padding: 0;
    }
    .label {
      font-weight: 600;
    }
    .date {
      margin-top: 0.3em;
      color: #888;
      font-size: 0.8em;
    }
  }
`
function Task(props) {
  const {
    title,
    date,
    done,
    color,
    onChange,
  } = props

  const momentDate = moment(date)
  const isAfter = momentDate.isAfter(moment())
  return (
    <TaskStyled>
      <div
        className="text"
        style={{
          opacity: done ? 0.5 : 1,
        }}
      >
        <p
          className="label"
          style={{
            textDecoration: done && 'line-through',
          }}
        >
          {title}

        </p>
        <p
          className="date"
          style={{
            color: !done && !isAfter && colors.danger,
          }}
        >
          {momentDate.format('H:mm MMMM D')}

        </p>
      </div>
      <Checkbox checked={done} color={color} onChange={onChange} />
    </TaskStyled>
  )
}


Task.propTypes = {
  color: PropTypes.string,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Task.defaultProps = {
  color: colors.primary,
}

export default Task
