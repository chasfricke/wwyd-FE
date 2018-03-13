import React from 'react'

export class Section extends React.Component {
  createCard(item) {
    return (
      <li key={item.id}>
        <div className="questionCard">
          <h4 className="questionTitle">{item.title}</h4>
          <p className="questionText">{item.question}</p>
          <div className="response-buttons">
            <button className="answer1">{item.answer1}</button>
            <button className="answer2">{item.answer2}</button>
          </div>
          <div className>
            <button className="Delete">Delete question</button>
            <button className="update">Edit question</button>
          </div>
        </div>
      </li>
    )
  }

  render() {
    console.log(this.props.questionsCard)
    return (
      <section>
        <ul className="questionList">{this.props.questionsCard.map(this.createCard)}</ul>
      </section>
    )
  }
}
