import React from 'react'
import View from '../ui/View'
import Title from '../ui/Title'
import colors from '../../utils/colors'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import CircleButton from '../ui/CircleButton'
import TaskContainer from '../containers/TaskContainer'
import '../../style/TasksView.scss'

function TasksView(props) {
  const { list, handleTaskChange, handleModalShow } = props

  return (
    <View margin={0} background={list.color}>
      <div className="TasksView">
        <div className="TasksView-header">
          <CircleButton color={colors.white} flat size={40}>
            <Icon name={list.icon} style={{ color: list.color }} />
          </CircleButton>
          <div className="TasksView-header-text">
            <Title color={colors.white}>{list.title}</Title>
            <p>
              {list.tasks.length}
              {' '}
              tasks
            </p>
          </div>
        </div>
        <Card radius={20} padding={30} style={{ flexBasis: '75vh', overflow: 'hidden' }}>
          <TaskContainer handleTaskChange={handleTaskChange} color={list.color} tasks={list.tasks} />
        </Card>
        <CircleButton
          onClick={() => handleModalShow(true)}
          color={list.color}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
        >
          <Icon name="add" style={{ color: colors.white }} />
        </CircleButton>
      </div>
    </View>
  )
}

export default TasksView
