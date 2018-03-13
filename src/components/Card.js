import React from 'react'
import { Modal, Button } from "react-bootstrap";


export class Section extends React.Component {
  constructor(props, context) {
   super(props, context);

   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);

   this.state = {
     show: undefined
   };
 }

 handleClose = () => {
   this.setState({ show: undefined });
 }

 handleShow = () => {
   console.log(this.state);
   this.setState({
     show: this.randomid()
   });
 }

 randomid = () => {
   console.log(this.props.questionsCard);
   let rindex = Math.floor(Math.random() * this.props.questionsCard.length)
   return rindex
 }

  createCard(item, index) {
    if(index === undefined) {
      return;
    }
    console.log(this.props.questionsCard);
    var item = this.props.questionsCard[this.state.show]
    return (
      <li key={item.id}>
        <div className="questionCard">
          <h4 className="questionTitle">{item.title}</h4>
          <p className="questionText">{item.question}</p>
          <div className="response-buttons">
            <button className="answer1">{item.answer1}</button>
            <button className="answer2">{item.answer2}</button>
          </div>
          <Button bsStyle="primary" bsSize="large">
          Next!
          </Button>
        </div>
      </li>
    )
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <Button className="play-button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Play!
       </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title></Modal.Title>
         </Modal.Header>
         <Modal.Body>
      <section>
        <ul className="questionList">{this.createCard()}</ul>
      </section>
      </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}
