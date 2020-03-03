import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import View from '../ui/View'
import Header from '../ui/Header'
import Icon from '../ui/Icon'
import NewTaskForm from '../containers/NewTaskForm'
import {
  setListTask as setListTaskAction,
} from '../../action-creators/app'
import axios from 'axios'

function NewTaskView(props) {
  const { list, history, setListTask } = props
  const handleSubmitTask = (taskData) => {
    axios.post(`/lists/${list.id}/tasks`, taskData)
      .then((response) => {
        setListTask(response.data)
      })
    history.push('/list')
  }
  return (
    <View margin={0}>
      <div style={{ padding: 16 }}>
        <Header
          right={
            <Icon name="close" />
          }

          onRight={() => { history.push('/list') }}
        >
          <span>New task</span>
        </Header>
      </div>
      <NewTaskForm onSubmit={handleSubmitTask} list={list} />
    </View>
  )
}


NewTaskView.propTypes = {
  list: PropTypes.object.isRequired,
  setListTask: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setListTask: (payload) => dispatch(setListTaskAction(payload)),
})

export default connect(null, mapDispatchToProps)(withRouter(NewTaskView))
