import React from 'react'
import List from '../ui/List'
import '../../style/ListContainer.scss'
import PropTypes from 'prop-types'

function ListContainer(props) {
  const { lists, handleListClick } = props
  return (
    <div className="ListContainer">
      {
        lists.map((list) => (
          <List
            key={list.title + list.icon}
            title={list.title}
            icon={list.icon}
            tasks={list.tasks}
            color={list.color}
            onClick={() => handleListClick(list)}
          />
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
