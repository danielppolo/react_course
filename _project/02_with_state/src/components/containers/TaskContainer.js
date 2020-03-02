import React from 'react'
import moment from 'moment'
import '../../style/TaskContainer.scss'
import TaskGroup from '../ui/TaskGroup'
import PropTypes from 'prop-types'

function TaskContainer(props) {
  const { tasks, color, handleTaskChange } = props
  const lateTasks = tasks && tasks.filter((task) => !task.done && moment(task.due_date).isBefore(moment()))
  const doneTasks = tasks && tasks.filter((task) => task.done)
  const todoTasks = tasks && tasks.filter((task) => !task.done && moment(task.due_date).isAfter(moment()))
  return (
    <div className="TaskContainer">
      <TaskGroup tasks={lateTasks} color={color} onChange={handleTaskChange} label="Late" />
      <TaskGroup tasks={todoTasks} color={color} onChange={handleTaskChange} label="Todo" />
      <TaskGroup tasks={doneTasks} color={color} onChange={handleTaskChange} label="Done" />
    </div>
  )
}

TaskContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  handleTaskChange: PropTypes.func.isRequired,
}

export default TaskContainer
