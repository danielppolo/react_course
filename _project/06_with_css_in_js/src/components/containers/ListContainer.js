import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import List from '../ui/List'
import {
  setSelectedList as setSelectedListAction,
} from '../../action-creators/app'

const ListContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto; 
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`

function ListContainer(props) {
  const { lists, setSelectedList } = props
  return (
    <ListContainerStyled>
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
    </ListContainerStyled>
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
