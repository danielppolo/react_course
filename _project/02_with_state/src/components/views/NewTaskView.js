import React from 'react'
import View from '../ui/View'
import Header from '../ui/Header'
import Icon from '../ui/Icon'
import NewTaskForm from '../containers/NewTaskForm'

function NewTaskView(props) {
  const { list, handleSubmitTask, handleCancel } = props
  return (
    <View margin={0}>
      <div style={{ padding: 16 }}>
        <Header
          right={
            <Icon name="close" />
            }

          onRight={handleCancel}
        >
          <span>New task</span>
        </Header>
      </div>
      <NewTaskForm onSubmit={handleSubmitTask} list={list} />
    </View>
  )
}

export default NewTaskView
