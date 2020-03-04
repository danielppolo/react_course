import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './Card'
import Icon from './Icon'

const ListStyled = styled.div`
  width: 100%;
  height: 40vw;
  max-width: 200px;
  max-height: 200px;
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    * {
      flex-basis: 50%;
    }  
    .description {

      * {
        margin: 0;
        padding: 0;
      }
      p {
        font-weight: 600;
        font-size: 20px;
      }
      span {
        font-size: 0.8em;
        color: #888;
      }
    }
  }
`

function List(props) {
  const {
    title,
    color,
    tasks,
    icon,
    onClick,
  } = props

  return (
    <ListStyled onClick={onClick}>
      <Card style={{ height: '100%' }} padding={20}>
        <div className="container">
          <div className="icon">
            <Icon name={icon} style={{ color }} />
          </div>
          <div className="description">
            <p>{title}</p>
            <span>
              {tasks.length}
              {' '}
              tasks
            </span>
          </div>
        </div>
      </Card>
    </ListStyled>
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
