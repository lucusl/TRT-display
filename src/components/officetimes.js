import React, { Component } from 'react';

class OfficeTimes extends Component {
constructor(props){
    super(props);

    this.state = {
      date : new Date()};
    
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
      date: new Date()
    });
  }

  render(){
  	var theTime = this.state.date;

  	return(
  		<div>
  			<p>currently offline</p>
  			<h3>Name of location {this.props.location}</h3>
  			<h3>{theTime.toLocaleTimeString()}</h3>
  		</div> 

  		)
	}
}

export default OfficeTimes;