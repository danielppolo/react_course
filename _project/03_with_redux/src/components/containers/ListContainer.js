import React from 'react'
import List from '../ui/List'
import '../../style/ListContainer.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setSelectedList as setSelectedListAction,
} from '../../action-creators/app'

function ListContainer(props) {
  const { lists, setSelectedList } = props
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
            onClick={() => setSelectedList(list.id)}
          />
        ))
      }
    </div>
  )
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  setSelectedList: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedList: (payload) => dispatch(setSelectedListAction(payload)),
  }
}

export default connect(null, mapDispatchToProps)(ListContainer)
