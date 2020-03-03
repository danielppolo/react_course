import React, { Component } from 'react'
import taskList from './data/tasks.json'
import './style/App.scss'
import ListsView from './components/views/ListsView'
import TasksView from './components/views/TasksView'
import NewTaskView from './components/views/NewTaskView'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: taskList,
      selectedList: null,
      modal: false,
    }
  }

  handleListClick = (list) => {
    this.setState((state) => ({
      ...state,
      selectedList: list.id,
    }))
  }

  handleTaskChange = (task) => {
    const { selectedList, lists } = this.state
    const list = lists.find((lst) => lst.id === selectedList)
    list.tasks.forEach((tsk) => {
      if (tsk.title === task.title) tsk.done = !tsk.done
    })
    this.setState((state) => ({
      ...state,
      lists,
    }))
  }

  handleAddTask = (task) => {
    const { selectedList, lists } = this.state
    const list = lists.find((lst) => lst.id === selectedList)
    list.tasks.forEach((tsk) => {
      if (tsk.title === task.title) tsk.done = !tsk.done
    })
    this.setState((state) => ({
      ...state,
      lists,
    }))
  }

  handleModalShow = (show = false) => {
    this.setState((state) => ({
      ...state,
      modal: show,
    }))
  }

  handleSubmitTask = (data) => {
    const { selectedList, lists } = this.state
    const list = lists.find((lst) => lst.id === selectedList)
    list.tasks.push({
      ...data,
      done: false,
    })
    this.setState(data)
    this.handleModalShow(false)
  }

  handleBack = () => {
    this.setState((state) => ({
      ...state,
      selectedList: null,
    }))
  }

  handleCancel = () => {
    this.handleModalShow(false)
  }

  render() {
    const { lists, selectedList, modal } = this.state
    const list = selectedList && lists.find((lst) => lst.id === selectedList)
    if (modal) {
      return (
        <NewTaskView
          list={list}
          handleSubmitTask={this.handleSubmitTask}
          handleCancel={this.handleCancel}
        />
      )
    }
    return (
      <div className="App">
        {
          list ? (
            <TasksView
              list={list}
              handleTaskChange={this.handleTaskChange}
              handleModalShow={this.handleModalShow}
              handleBack={this.handleBack}
            />
          ) : <ListsView lists={lists} handleListClick={this.handleListClick} />
        }
      </div>
    )
  }
}

export default App
