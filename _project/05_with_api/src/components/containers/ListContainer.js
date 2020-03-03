import React from 'react'
import '../../style/ListContainer.scss'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'
import List from '../ui/List'

function ListContainer(props) {
  const { lists, handleListClick } = props
  return (
    <div className="ListContainer">
      {
        lists.map((list) => (
          <Link to="/list">
            <List
              key={list.id}
              title={list.title}
              icon={list.icon}
              tasks={list.tasks}
              color={list.color}
              onClick={() => handleListClick(list)}
            />
          </Link>
        ))
      }
    </div>
  )
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListClick: PropTypes.func.isRequired,
}

export default ListContainer
