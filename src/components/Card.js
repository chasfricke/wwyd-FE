import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Card.css'
import { Update } from './Update'

export class Section extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)

    this.updateQuestion = this.updateQuestion.bind(this)
    this.state = {
      show: undefined,
      title: undefined,
      question: undefined,
      answer1: undefined,
      answer2: undefined
    }
  }
  handleClose = () => {
    this.setState({ show: undefined })
  }
  handleShow = e => {
    e.preventDefault()
    this.setState({
      show: this.getRandomCard()
    })
  }
  updateQuestion = event => {
    this.props.updateQuestion(this.state.show)
    event.target.reset()
    this.setState({ show: false })
  }
  updateRandomQuestion = id => {
    return fetch('https://wwydbackend.herokuapp.com/questions/' + id, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).catch(error => console.error('Error', error))
  }
  onUpdate = event => {
    event.preventDefault()
  }
  renderUpdateButton = show => {
    if (show.id < 25) {
      return ''
    } else {
      return (
        <div>
          <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            <h3>EDIT A QUESTION</h3>
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>
              <form>
                <h3>EDIT QUESTION</h3>
                <label htmlFor="title"></label>
                <textarea name="title" rows="2" cols="50" id="title" placeholder="Enter title here.." />
                <label htmlFor="question"></label>
                <textarea name="question" rows="10" cols="50" id="question" placeholder="Enter question here..." />
                <label htmlFor="answer_1"></label>
                <input type="text" name="answer_1" id="answer_1" size="35" placeholder="Enter first answer option..." />
                <label htmlFor="answer_2"></label>
                <input type="text" name="answer_2" id="answer_2" size="35" placeholder="Enter second answer option..." />
                <button className="update" onClick={() => this.updateRandomQuestion(show.id)}>
                  <h3>UPDATE</h3>
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )
    }
  }
  deleteQuestion = event => {
    this.props.deleteQuestion(this.state.show)
    event.target.reset()
    this.setState({ show: false })
  }
  deleteRandomQuestion = id => {
    return fetch('https://wwydbackend.herokuapp.com/questions/' + id, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).catch(error => console.error('Error', error))
  }
  onDelete = event => {
    event.preventDefault()
  }
  renderDeleteButton = show => {
    if (show.id < 25) {
      return ''
    } else {
      return (
        <button className="delete" onClick={() => this.deleteRandomQuestion(show.id)}>
          <h3>DELETE</h3>
        </button>
      )
    }
  }

  getRandomCard = () => {
    let rindex = Math.floor(Math.random() * this.props.questionsCard.length)
    return this.props.questionsCard[rindex - 1]
  }
  createCard(randomCard, index) {
    var randomCard = this.props.questionsCard[this.state.show - 1]
    if (!this.state.show) {
      return null
    }
    const { show } = this.state
    return (
      <li key={show.id}>
        <div className="questionCard">
          <div className="" />
          <h3 className="questionTitle">{show.title.toUpperCase()}</h3>
          <p className="questionText">{show.question}</p>
          <div className="response-buttons">
            <button className="answer1">
              <h3>{show.answer1}</h3>
            </button>
            <button className="answer2">
              <h3>{show.answer2}</h3>
            </button>
          </div>
          <Button
            className="next-button"
            bsStyle="primary"
            bsSize="large"
            onClick={e => {
              this.handleShow(e)
            }}
          >
            <h3>>>></h3>
          </Button>
          <div className="buttons" onClick={this.handleClose}>
            {this.renderUpdateButton(show)}
            {this.renderDeleteButton(show)}
          </div>
        </div>
      </li>
    )
  }
  render() {
    return (
      <div>
        <div className="button-container">
          <Button
            className="play-button"
            bsStyle="primary"
            bsSize="large"
            onClick={e => {
              this.handleShow(e)
            }}
          >
            <h3>PLAY</h3>
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header> */}
          <Modal.Body closeButton>
            <section>
              <ul className="questionList">{this.createCard()}</ul>
            </section>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button className="button" onClick={this.handleClose}>
              <h3>CLOSE</h3>
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    )
  }
}
