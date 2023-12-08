import React, { Component } from "react";

class Timer extends Component {
  
    state = {
      time: new Date().getTime()
    }
  

  render() {
    return (
      <>
        <h1>Hello</h1>
        <p>Current time: {this.state.time}</p>
      </>
    );
  }
}

export default Timer;
