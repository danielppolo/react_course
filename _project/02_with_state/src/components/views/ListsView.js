import React from 'react'
import ListContainer from '../containers/ListContainer'
import View from '../ui/View'
import Title from '../ui/Title'
import Divider from '../ui/Divider'

function ListsView(props) {
  const { lists, handleListClick } = props
  return (
    <View>
      <Title>Lists</Title>
      <Divider verticalMargin={30} stroke={0} />
      <ListContainer
        lists={lists}
        handleListClick={handleListClick}
      />
    </View>
  )
}

export default ListsView
