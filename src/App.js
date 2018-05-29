import React, { Component } from 'react'
import './App.css'
import { Header } from './components/Header'
import { SplashScreen } from './components/SplashScreen'
import Add from './components/AddForm'
import { Section } from './components/Card'
import { Contact } from './components/Contact'
import { Modal, Button } from 'react-bootstrap'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      questions: [],
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = () => {
    return fetch('https://groupprojectbackend.herokuapp.com/questions')
      .then(response => response.json())
      .then(data => {
        this.setState({ questions: data.questions })
      })
  }

  onSubmit = event => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const questions = this.state.questions
    const question = {
      title: data.get('title'),
      question: data.get('question'),
      answer1: data.get('answer1'),
      answer2: data.get('answer2'),
      response1: 0,
      response2: 0
    }
    this.addQuestion(question)
    this.setState({ questions })
    event.target.reset()
    this.setState({ show: false })
  }

  addQuestion = question => {
    fetch('https://groupprojectbackend.herokuapp.com/questions', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => {
        this.getQuestions()
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="title-div">
            <h2>HOW TO PLAY</h2>
          </div>
          <div className="instructions-container">
            <SplashScreen />
            <div className="splash-buttons">
              <Section questionsCard={this.state.questions} />
              <Button className="add-button" onClick={this.handleShow}>
              <span className="plus-sign">+</span>
              </Button>
            </div>
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body className="modal-body">
            <h3>ADD A QUESTION</h3>
            <Add onSubmit={this.onSubmit} />
            </Modal.Body>
            </Modal>
          </div>
          <Contact />
        </main>
      </div>
    )
  }
}

export default App
