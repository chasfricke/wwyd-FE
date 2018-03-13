import React from 'react'
import { Modal, Button } from "react-bootstrap";


export class Section extends React.Component {
  constructor(props, context) {
   super(props, context);

   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);

   this.state = {
     show: false
   };
 }

 handleClose() {
   this.setState({ show: false });
 }

 handleShow() {
   this.setState({ show: true });
 }

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
        </div>
      </li>
    )
  }

  render() {
    console.log(this.props.questionsCard)
    return (
      <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Play!
       </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Update Your Question</Modal.Title>
         </Modal.Header>
         <Modal.Body>
      <section>
        <ul className="questionList">{this.props.questionsCard.map(this.createCard)}</ul>
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
