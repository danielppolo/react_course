import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListContainer from '../containers/ListContainer'
import View from '../ui/View'
import Title from '../ui/Title'
import Divider from '../ui/Divider'
import Header from '../ui/Header'
import Icon from '../ui/Icon'
import {
  setSelectedList as setSelectedListAction,
} from '../../action-creators/app'

function ListsView(props) {
  const { lists, setSelectedList } = props

  const handleListClick = (list) => {
    setSelectedList(list.id)
  }

  return (
    <View>
      <Header left={(
        <Icon name="format_align_left" />
      )}
      />
      <Title>Lists</Title>
      <Divider verticalMargin={15} stroke={0} />
      <ListContainer
        lists={lists}
        handleListClick={handleListClick}
      />
    </View>
  )
}

ListsView.propTypes = {
  lists: PropTypes.array.isRequired,
  setSelectedList: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  setSelectedList: (payload) => dispatch(setSelectedListAction(payload)),
})

export default connect(null, mapDispatchToProps)(ListsView)
