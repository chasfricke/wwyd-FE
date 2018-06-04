import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Card.css'
import { Timer } from './timer.js'

export class Section extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      show: undefined,
      updateObject: []
    }
  }

  handleClose = () => {
    this.setState({
      show: undefined
    })
  }

  handleShow = (e) => {
    e.preventDefault()
    this.setState({
      show: this.getRandomCard()
    })
  }

  handleEdit = (e, show) => {
    e.preventDefault()
    this.setState({
      editingQuestion: this.state.show
    })
  }

  handleChange = ({target}) => {
    const show = this.state.show
    show[target.name] = target.value
    this.setState({show})
  }

  updateQuestion = (e, show) => {
    var editingObj= {
      id: show.id,
      title: show.title,
      question: show.question,
      answer1: show.answer1,
      answer2: show.answer2,
      response1: show.response1,
      response2: show.response2
      }
    this.setState({
      editingQuestion: editingObj
    })
    e.preventDefault()
    this.updateRandomQuestion(editingObj)
    this.setState({
      show: undefined
    })
  }

  updateRandomQuestion = (editingObj) => {
    return fetch('https://groupprojectbackend.herokuapp.com/questions/' + editingObj.id, {
      method: 'PUT',
      body: JSON.stringify(editingObj),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
  }

  renderUpdateButton = (show) => {
    if (show.id > 25) {
      return (
        <div>
          <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleEdit}>
            <h3>EDIT QUESTION</h3>
          </Button>
          <Modal show={this.state.editingQuestion} onHide={this.handleClose}>
            <Modal.Body>
              <form onChange={e => this.handleChange(e)}>
                <h3>EDIT QUESTION</h3>
                <label htmlFor="title" />
                <textarea
                  name="title"
                  rows="2"
                  cols="50"
                  id="title"
                  placeholder="Enter title here.."
                  defaultValue={show.title}
                />
                <label htmlFor="question" />
                <textarea
                  name="question"
                  rows="10"
                  cols="50"
                  id="question"
                  placeholder="Enter question here..."
                  defaultValue={show.question}
                />
                <label htmlFor="answer1" />
                <input
                  type="text"
                  name="answer1"
                  id="answer1"
                  size="35"
                  placeholder="Enter first answer option..."
                  defaultValue={show.answer1}
                />
                <label htmlFor="answer2" />
                <input
                  type="text"
                  name="answer2"
                  id="answer2"
                  size="35"
                  placeholder="Enter second answer option..."
                  defaultValue={show.answer2}
                />
                <p>Votes for answer 1: {show.response1}</p>
                <p>Votes for answer 2: {show.response2}</p>
                <button className="update" onClick={e => this.updateQuestion(e, show)}>
                  <h3>UPDATE</h3>
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )
    }
  }

  deleteRandomQuestion = (id) => {
    return fetch('https://groupprojectbackend.herokuapp.com/questions/' + id, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).catch(error => console.error('Error', error))
  }

  renderDeleteButton = (show) => {
    if (show.id > 25) {
      return (
        <div onClick={this.handleClose}>
          <button className="delete" onClick={() => this.deleteRandomQuestion(show.id)}>
            <h3>DELETE</h3>
          </button>
        </div>
      )
    }
  }

  likeResponse1(e, show) {
    var updateLikeObj = {
      id: show.id,
      title: show.title,
      question: show.question,
      answer1: show.answer1,
      answer2: show.answer2,
      response1: show.response1 += 1,
      response2: show.response2
    }
    this.setState({
      updateObject: updateLikeObj
    })
    this.updateLike(updateLikeObj)
  }

  likeResponse2(e, show) {
    var updateLikeObj = {
      id: show.id,
      title: show.title,
      question: show.question,
      answer1: show.answer1,
      answer2: show.answer2,
      response1: show.response1,
      response2: show.response2 += 1,
    }
    this.setState({
      updateObject: updateLikeObj
    })
    this.updateLike(updateLikeObj)
  }

  updateLike = (updateLikeObj) => {
    return fetch('https://groupprojectbackend.herokuapp.com/questions/' + updateLikeObj.id, {
      method: 'PUT',
      body: JSON.stringify(updateLikeObj),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
  }

  getRandomCard = () => {
    let rindex = Math.floor(Math.random() * this.props.questionsCard.length)
    return this.props.questionsCard[rindex - 1]
  }

  createCard(index) {
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
            <button className="answer1" onClick={e => this.likeResponse1(e, show)}>
              <h3>{show.answer1}</h3>
              <p>Votes: {show.response1}</p>
            </button>
            <button className="answer2" onClick={e => this.likeResponse2(e, show)}>
              <h3>{show.answer2}</h3>
              <p>Votes: {show.response2}</p>
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
          <div className="update-buttons">
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
          <Modal.Header>
            <Timer />
          </Modal.Header>
          <Modal.Body>
            <section>
              <ul className="questionList">{this.createCard()}</ul>
            </section>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
