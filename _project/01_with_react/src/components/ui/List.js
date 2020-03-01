import React from 'react'
import Card from './Card'
import '../../style/List.scss'
import Icon from './Icon'

function List(props) {
  const {
    title,
    color,
    tasks,
    icon,
  } = props

  return (
    <div className="List">
      <Card style={{ height: '100%' }} padding={20}>
        <div className="List-container">
          <div className="List-icon">
            <Icon name={icon} style={{ color }} />
          </div>
          <div className="List-description">
            <p>{title}</p>
            <span>
              {tasks.length}
              {' '}
              tasks
            </span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default List
