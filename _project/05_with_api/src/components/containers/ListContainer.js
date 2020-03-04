import React from 'react'
import '../../style/ListContainer.scss'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'
import List from '../ui/List'
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
          <Link to="/list">
            <List
              key={list.id}
              title={list.title}
              icon={list.icon}
              tasks={list.tasks}
              color={list.color}
              onClick={() => setSelectedList(list.id)}
            />
          </Link>
        ))
      }
    </div>
  )
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  setSelectedList: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedList: (payload) => dispatch(setSelectedListAction(payload)),
})

export default connect(null, mapDispatchToProps)(ListContainer)
