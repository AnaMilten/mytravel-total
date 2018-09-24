import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>current count: {count} </h1>
      </div>
    )
  }


  componentDidMount() {
    this.myInterval = setInterval(()=>{
      let prevState = () => {
        this.count= prevState.count + 1
      }
     prevState (this.state);
    }, 100)
  }

/*  componentDidMount() {
    this.myInterval = setInterval(()=>{
      this.state(prevState => ({
        count: prevState.count + 1
      }))
    }, 100)
    
  }*/

  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
}

export default Timer;