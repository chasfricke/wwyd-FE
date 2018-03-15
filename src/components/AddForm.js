import React from 'react'
import '../css/Add.css'

export default function Form({ onSubmit }) {
  return (
      <form className="addform" id="form" onSubmit={onSubmit}>
        <label htmlFor="title">Title: </label>
        <textarea
          name="title"
          rows="2"
          cols="50"
          id="title"
          placeholder="Enter title for your question"
        />
        <label htmlFor="question">Question: </label>
        <textarea
          name="question"
          rows="10"
          cols="50"
          id="question"
          placeholder="Enter question here."
        />
        <label htmlFor="answer1">Answer #1: </label>
        <input
          type="text"
          name="answer1"
          id="answer1"
          size="35"
          placeholder="Enter first answer option."
        />
        <label htmlFor="answer2">Answer #2: </label>
        <input
          type="text"
          name="answer2"
          id="answer2"
          size="35"
          placeholder="Enter second answer option."
        />
        <button type="submit" value="Submit"><h3>SUBMIT</h3></button>
      </form>
  )
}
