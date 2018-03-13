import React from 'react'
import Card from './Card.js'

const RandomQ = props => {
  const questions = props.questions
  const randomid = () => {
    let rindex = Math.floor(Math.random() * questions.length)
    return rindex
  }

  const rindex = randomid()
  const question = questions[rindex]

  return (
    <QuestionCard
      key={question.id}
      question={question}
      title={props.title}
      question={props.questions}
      answer1={props.answer1}
      answer2={props.answer2}
    />
  )
}
export default RandomQ
