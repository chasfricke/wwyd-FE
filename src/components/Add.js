import React from "react";
import "../css/Add.css"

export class Add extends React.Component {
  render () {
    return (
      <div className="form-container">
        
        <form className="song-form">
          <h2>Add A Question... </h2>
          <label htmlFor="title">Title: </label>
          <textarea name="title" rows="2" cols="50" id="title" placeholder="Do you take the pill?"></textarea>
          <label htmlFor="question">Question: </label>
          <textarea name="question" rows="10" cols="50" id="question" placeholder="Enter question here."></textarea>
          <label htmlFor="answer_1">Answer #1: </label>
          <input type="text" name="answer_1" id="answer_1" size="35" placeholder="Enter first answer option." />
          <label htmlFor="answer_2">Answer #2: </label>
          <input type="text" name="answer_2" id="answer_2" size="35" placeholder="Enter second answer option." />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
