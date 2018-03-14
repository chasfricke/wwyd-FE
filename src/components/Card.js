import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export class Section extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)

    this.state = {
      show: undefined
    }
  }
  deleteQuestion = event => {
    this.props.deleteQuestion(this.state.randomCard)
  }

  deleteRandomQuestion = id => {
    return fetch('https://wwydbackend.herokuapp.com/questions/' + id, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => this.props.loadData())
      .catch(error => console.error('Error', error))
  }

  onDelete = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    this.deleteRandomQuestion(data.get('id'))
  }

  renderDeleteButton = item => {
    if (item.id < 25) {
      return ''
    } else {
      return (
        <button className="delete" onClick={() => this.deleteRandomQuestion(item.id)}>
          Delete
        </button>
      )
    }
  }

  handleClose = () => {
    this.setState({ show: undefined })
  }

  handleShow = () => {
    console.log(this.state)
    this.setState({
      show: this.randomid()
    })
  }

  randomid = () => {
    console.log(this.props.questionsCard)
    let rindex = Math.floor(Math.random() * this.props.questionsCard.length)
    return rindex
  }

  createCard() {
    console.log(this.state)
    var item = this.props.questionsCard[this.state.show]
    console.log(this.props.questionsCard)
    return (
      <li>
        <div className="questionCard">
          <h4 className="questionTitle">{item.title}</h4>
          <p className="questionText">{item.question}</p>
          <div className="response-buttons">
            <button className="answer1">{item.answer1}</button>
            <button className="answer2">{item.answer2}</button>
          </div>
          <Button className="button" bsStyle="primary" bsSize="large">
            <h3>NEXT</h3>
          </Button>
        </div>
      </li>
    )
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Button className="play-button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          <h3>PLAY</h3>
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <section>
              <ul className="questionList">{this.createCard()}</ul>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>
              <h3>CLOSE</h3>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
