import React from "react"
import { Button } from "react-bootstrap"

export class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    this.setState({
      count: (this.state.count + 1)
    })
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  clearTimer () {
    this.setState({
      count: 0
    })
  }
  render () {
    return (
      <div className='timer'>
        <h2>Timer: {this.state.count} <small>seconds elapsed</small></h2>
        <div className="response-buttons">
          <button className="btn-sm" onClick={this.startTimer.bind(this)}>Start</button>
          <button className="btn-sm" onClick={this.stopTimer.bind(this)}>Stop</button>
          <button className="btn-sm" onClick={this.clearTimer.bind(this)}>Clear</button>
        </div>
      </div>
    )
  }
}
