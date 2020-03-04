import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../ui/Input'
import Divider from '../ui/Divider'
import Button from '../ui/Button'


const NewTaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  .fields {
    flex: 1;
    padding: 16px;
    box-sizing: border-box;
  }
`

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      note: '',
      title: '',
    }
  }

  handleDateChange = (date) => {
    this.setState({
      ...this.state,
      date,
    })
  }

  handleNoteChange = (event) => {
    this.setState({
      ...this.state,
      note: event.target.value,
    })
  }

  handleTitleChange = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      onSubmit,
    } = this.props
    const {
      title,
      date,
      note,
    } = this.state
    onSubmit({
      title,
      note,
      due_date: date.format(),
      done: false,
    })
  }

  render() {
    const {
      list,
    } = this.props

    const {
      title,
      date,
      note,
    } = this.state
    return (
      <NewTaskFormStyled onSubmit={this.handleSubmit}>
        <div className="fields">
          <Divider verticalMargin={30} stroke={0} />
          <Input
            label="What are you planning?"
            type="text"
            value={title}
            color={list.color}
            onChange={this.handleTitleChange}
            autoFocus
            required
          />
          <Divider verticalMargin={30} />
          <Input
            type="date"
            value={date}
            label="Set a due date"
            onChange={this.handleDateChange}
            color={list.color}
            required
          />
          <Divider verticalMargin={30} stroke={0} />
          <Input
            type="text"
            label="Add note"
            value={note}
            onChange={this.handleNoteChange}
            color={list.color}
          />
          <Divider verticalMargin={30} stroke={0} />
        </div>
        <Button type="submit" background={list.color}>Create task</Button>
      </NewTaskFormStyled>
    )
  }
}

NewTaskForm.propTypes = {
  list: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default NewTaskForm
