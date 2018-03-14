import React, { Component } from 'react'
import './App.css'
import { Header } from './components/Header'
import { SplashScreen } from './components/SplashScreen'
import Add from './components/AddForm'
import { Section } from './components/Card'
import { Update } from './components/Update'
import { Contact } from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
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

  // deleteQuestion = id => {
  //   console.log('delete question', id, this.state)
  //   return fetch('https://wwydbackend.herokuapp.com/questions/' + id, { method: 'DELETE' })
  //     .then(response => response.text())
  //     .then(response => {})
  //     .then(this.data)
  //     .catch(error => console.error)
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="title-div">
            <h2>HOW TO PLAY</h2>
          </div>

          <Add onSubmit={this.onSubmit} />
          <Update />
          <Contact />
        </main>
      </div>
    )
  }
}

export default App
