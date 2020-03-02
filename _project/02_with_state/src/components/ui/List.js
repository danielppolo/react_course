import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import '../../style/List.scss'
import Icon from './Icon'

function List(props) {
  const {
    title,
    color,
    tasks,
    icon,
    onClick,
  } = props

  return (
    <div className="List" onClick={onClick}>
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


List.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

List.defaultProps = {
  onClick: null,
}


export default List
