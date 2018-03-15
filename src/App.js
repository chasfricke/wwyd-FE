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
    return fetch('https://wwydbackend.herokuapp.com/questions')
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
      response1: 1,
      response2: 1
    }
    this.addQuestion(question)
    this.setState({ questions })
    event.target.reset()
    this.setState({ show: false })
  }

  addQuestion = question => {
    fetch('https://wwydbackend.herokuapp.com/questions', {
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
              <div>
                <Button
                  className="button"
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.handleShow}
                >
                  <h3>+</h3>
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header className="modal-header">
                    <Modal.Title>
                      <h2>ADD A QUESTION</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-body">
                    <Add onSubmit={this.onSubmit} />
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
          <Contact />
        </main>
      </div>
    )
  }
}

export default App
