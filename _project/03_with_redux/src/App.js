import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style/App.scss'
import ListsView from './components/views/ListsView'
import TasksView from './components/views/TasksView'
import NewTaskView from './components/views/NewTaskView'
import {
  setListTask as setListTaskAction,
} from './action-creators/app'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }


  handleModalShow = (show = false) => {
    this.setState((state) => ({
      ...state,
      modal: show,
    }))
  }

  handleSubmitTask = (taskData) => {
    const { setListTask } = this.props
    setListTask(taskData)
    this.handleModalShow(false)
  }

  handleCancel = () => {
    this.handleModalShow(false)
  }

  render() {
    const { modal } = this.state
    const { lists, selected } = this.props
    const list = selected && lists.find((lst) => lst.id === selected)
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
              handleModalShow={this.handleModalShow}
            />
          ) : <ListsView lists={lists} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.app.lists,
  selected: state.app.selected,
})

const mapDispatchToProps = (dispatch) => ({
  setListTask: (payload) => dispatch(setListTaskAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
