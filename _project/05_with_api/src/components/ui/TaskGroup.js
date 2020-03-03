import React from 'react'
import '../../style/TaskGroup.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'
import Task from './Task'

function TaskGroup(props) {
  const {
    tasks,
    color,
    label,
    onChange,
  } = props

  return tasks.length ? (
    <div
      className="TaskGroup"
    >
      <p className="TaskGroup-label">{label}</p>
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
    </div>
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
