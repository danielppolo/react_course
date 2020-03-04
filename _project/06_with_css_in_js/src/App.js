import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import './style/App.scss'
import ListsView from './components/views/ListsView'
import TasksView from './components/views/TasksView'
import NewTaskView from './components/views/NewTaskView'
import axios from 'axios'
import { setLists as setListsAction } from './action-creators/app'

class App extends Component {
  componentDidMount() {
    const { setLists } = this.props
    axios.get('/lists')
      .then((response) => {
        setLists(response.data)
      })
  }
  render() {
    const { lists, selected } = this.props
    const list = selected && lists.find((lst) => lst.id === selected)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <ListsView lists={lists} />
            </Route>
            {
              list && (
                <>
                  <Route path="/list">
                    <TasksView list={list} />
                  </Route>
                  <Route path="/new">
                    <NewTaskView list={list} />
                  </Route>
                </>
              )
            }
          </Switch>
          <Redirect to="/" />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.app.lists,
  selected: state.app.selected,
})

const mapDispatchToProps = (dispatch) => ({
  setLists: (payload) => dispatch(setListsAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
