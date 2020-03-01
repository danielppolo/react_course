import React from 'react'
import View from '../ui/View'
import NewTaskForm from '../containers/NewTaskForm'

function NewTaskView(props) {
  const { list, handleSubmitTask } = props
  return (
    <View margin={0}>
      <NewTaskForm onSubmit={handleSubmitTask} list={list} />
    </View>
  )
}

export default NewTaskView
