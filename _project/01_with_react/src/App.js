import React from 'react'
import './style/App.css'
import Card from './components/ui/Card'
import Button from './components/ui/Button'
import Checkbox from './components/ui/Checkbox'
import CircleButton from './components/ui/CircleButton'
import Input from './components/ui/Input'
import List from './components/ui/List'
import Task from './components/ui/Task'
import Divider from './components/ui/Divider'
import Title from './components/ui/Title'
import colors from './utils/colors'
import Icon from './components/ui/Icon'

function App() {
  return (
    <div className="App">
      <Title>Tasks</Title>
      <Card>
        <Button>Click me</Button>
        <Checkbox color="#00FF00" />
        <CircleButton>
          <Icon name="add" />
        </CircleButton>
        <Task
          label="Clean dishes"
          date="2019-03-01T17:00:00"
        />
        <Input type="text" label="What are you planning?" />
        <Divider />
        <Input type="date" color="#FF0000" />
      </Card>
      <List
        title="All"
        icon="calendar_today"
        color={colors.primary}
        tasks={[1, 2, 3]}
      />

    </div>
  )
}

export default App
