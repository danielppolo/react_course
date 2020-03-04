import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  withRouter,
} from 'react-router-dom'
import styled from 'styled-components'
import View from '../ui/View'
import Title from '../ui/Title'
import colors from '../../utils/colors'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import CircleButton from '../ui/CircleButton'
import TaskContainer from '../containers/TaskContainer'
import Header from '../ui/Header'
import {
  setSelectedList as setSelectedListAction,
  updateListTask as updateListTaskAction,
} from '../../action-creators/app'

const TasksViewStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    flex-basis: 10vh;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > .header-text {
      margin-top: 12px;
    }
    p {
      color: rgba($color: #FFF, $alpha: 0.7);
      margin: 0;
    }
  }
`

function TasksView(props) {
  const {
    list, setSelectedList, updateListTask, history,
  } = props

  const goBack = () => {
    setSelectedList(null)
    history.push('/')
  }

  const toggleListTask = (task) => {
    axios.post(`/tasks/${task.id}/toggle`)
      .then((response) => {
        updateListTask(response.data)
      })
  }

  return (
    <View margin={0} background={list.color}>
      <TasksViewStyled>
        <div className="header">
          <Header
            left={
              <Icon name="arrow_back" style={{ color: colors.white }} />
            }
            right={
              <Icon name="more_vert" style={{ color: colors.white }} />
            }
            onLeft={goBack}
          />
          <CircleButton color={colors.white} flat size={40}>
            <Icon name={list.icon} style={{ color: list.color }} />
          </CircleButton>
          <div className="header-text">
            <Title color={colors.white}>{list.title}</Title>
            <p>
              {list.tasks.length}
              {' '}
              tasks
            </p>
          </div>
        </div>
        <Card radius={20} padding={30} style={{ flexBasis: '75vh', overflow: 'hidden' }}>
          <TaskContainer handleTaskChange={toggleListTask} color={list.color} tasks={list.tasks} />
        </Card>
        <CircleButton
          onClick={() => history.push('/new')}
          color={list.color}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
        >
          <Icon name="add" style={{ color: colors.white }} />
        </CircleButton>
      </TasksViewStyled>
    </View>
  )
}


TasksView.propTypes = {
  list: PropTypes.object.isRequired,
  updateListTask: PropTypes.func.isRequired,
  setSelectedList: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  setSelectedList: (payload) => dispatch(setSelectedListAction(payload)),
  updateListTask: (payload) => dispatch(updateListTaskAction(payload)),
})

export default connect(null, mapDispatchToProps)(withRouter(TasksView))
