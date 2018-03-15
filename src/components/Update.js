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
<<<<<<< HEAD
        <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          <h3>EDIT A QUESTION</h3>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT A QUESTION</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="title">Title: </label>
              <textarea name="title" rows="2" cols="50" id="title" />
              <label htmlFor="question">Question: </label>
              <textarea name="question" rows="10" cols="50" id="question" />
              <label htmlFor="answer_1">Answer #1: </label>
              <input type="text" name="answer_1" id="answer_1" size="35" />
              <label htmlFor="answer_2">Answer #2: </label>
              <input type="text" name="answer_2" id="answer_2" size="35" />
              <button>
                <h3>UPDATE</h3>
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="button" onClick={this.handleClose}>
              <h3>CLOSE</h3>
            </Button>
          </Modal.Footer>
=======
      <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
        <h3>EDIT</h3>
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
         <Modal.Header>
           <Modal.Title><h2>EDIT QUESTION</h2></Modal.Title>
         </Modal.Header>
         <Modal.Body className="modal-body">
        <form>
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
          <button><h3>UPDATE</h3></button>
        </form>
        </Modal.Body>
          {/* <Modal.Footer>
            <Button className="button" onClick={this.handleClose}><h3>CLOSE</h3></Button>
          </Modal.Footer> */}
>>>>>>> master
        </Modal>
      </div>
    )
  }
}
