import React from 'react';
import { Modal, Button } from "react-bootstrap";

export class Section extends React.Component {
  constructor(props, context) {
   super(props, context);

   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);

   this.state = {
     show: undefined,
     title: undefined,
     question: undefined,
     answer1: undefined,
     answer2: undefined
   };
 }

 handleClose = () => {
   this.setState({ show: undefined });
 }

 handleShow = (e) => {
   e.preventDefault()
   this.setState({
     show: this.getRandomCard()
   });
 }

 getRandomCard = () => {
   let rindex = Math.floor(Math.random() * this.props.questionsCard.length)
   return this.props.questionsCard[rindex -1];
 }

  createCard(randomCard, index) {
    var randomCard = this.props.questionsCard[this.state.show -1];

    if(!this.state.show){
      return null
    }

    const {show} = this.state

    return (
      <li key={show.id}>
        <div className="questionCard">
          <h4 className="questionTitle">{show.title}</h4>
          <p className="questionText">{show.question}</p>
          <div className="response-buttons">
            <button className="answer1">{show.answer1}</button>
            <button className="answer2">{show.answer2}</button>
          </div>
          <Button className="button" bsStyle="primary" bsSize="large" onClick={(e)=>{this.handleShow(e)}}>
          <h3>NEXT</h3>
          </Button>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div>
        <Button className="play-button" bsStyle="primary" bsSize="large" onClick={(e)=>{this.handleShow(e)}}>
        <h3>PLAY</h3>
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <section>
          <ul className="questionList">{this.createCard()}</ul>
        </section>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}><h3>CLOSE</h3></Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
