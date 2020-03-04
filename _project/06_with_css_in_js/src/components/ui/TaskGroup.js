import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Task from './Task'

const TaskGroupStyled = styled.div`
  margin-bottom: 2em;
.label {
  color: #888;
  font-size: 0.8em;
  font-weight: 600;
}
`
function TaskGroup(props) {
  const {
    tasks,
    color,
    label,
    onChange,
  } = props

  return tasks.length ? (
    <TaskGroupStyled>
      <p className="label">{label}</p>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            date={task.due_date}
            title={task.title}
            color={color}
            done={task.done}
            onChange={() => onChange(task)}
          />
        ))
      }
    </TaskGroupStyled>
  ) : null
}

TaskGroup.propTypes = {
  color: PropTypes.string,
  tasks: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

TaskGroup.defaultProps = {
  color: colors.white,
  tasks: [],
  label: '',
}

export default TaskGroup
