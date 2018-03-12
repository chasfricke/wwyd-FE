import React from "react";
import "../css/Update.css";

export class Update extends React.Component {
  render () {
    return (
      <div className="form-container">
        <form>
          <h2>Update A Question...</h2>
          <label htmlFor="title">Title: </label>
          <textarea
            name="title"
            rows="2"
            cols="50"
            id="title"
          />
          <label htmlFor="question">Question: </label>
          <textarea
            name="question"
            rows="10"
            cols="50"
            id="question"
          />
          <label htmlFor="answer_1">Answer #1: </label>
          <input
            type="text"
            name="answer_1"
            id="answer_1"
            size="35"
          />
          <label htmlFor="answer_2">Answer #2: </label>
          <input
            type="text"
            name="answer_2"
            id="answer_2"
            size="35"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}