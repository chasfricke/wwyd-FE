import React from 'react'
import '../css/Update.css'
import { Modal, Button } from 'react-bootstrap'

export class Update extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <div>
        <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          <h3>EDIT</h3>
        </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Body className="modal-body">
         <h3>UPDATE QUESTION</h3>
        <form>
          <label htmlFor="title"></label>
          <textarea
            name="title"
            rows="2"
            cols="50"
            id="title"
            placeholder="Enter title here..."
          />
          <label htmlFor="question"></label>
          <textarea
            name="question"
            rows="10"
            cols="50"
            id="question"
            placeholder="Enter question here..."
          />
          <label htmlFor="answer_1"></label>
          <input
            type="text"
            name="answer_1"
            id="answer_1"
            size="35"
            placeholder="Enter first answer option..."
          />
          <label htmlFor="answer_2"></label>
          <input
            type="text"
            name="answer_2"
            id="answer_2"
            size="35"
            placeholder="Enter second answer option..."
          />
          <button><h3>UPDATE</h3></button>
        </form>
        </Modal.Body>
          {/* <Modal.Footer>
            <Button className="button" onClick={this.handleClose}><h3>CLOSE</h3></Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    )
  }
}
