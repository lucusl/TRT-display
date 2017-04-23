import React, { Component } from 'react';
import Moment from 'moment';
import MomentTimezone from 'moment-timezone';



class Clock extends Component {
constructor(props){
    super(props);

    this.state = {
     date : Moment().tz(this.props.location).format()
   };
    
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: Moment().tz(this.props.location).format('hh:mm')
    });
  }
  render(){
  	return(

		 <p className="App-intro black">
          it is {this.state.date} in {this.props.location}
      </p>

  		)

  	}
}

export default Clock;
