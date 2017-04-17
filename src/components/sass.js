import React, { Component } from 'react';
import * as firebase from 'firebase';

class Sass extends Component {
  	
constructor(props){
	super(props);
	this.state = {
		sassLevel: 0
	}
}

componentDidMount() {
	const rootRef = firebase.database().ref().child('trtApp');
	const sassRef = rootRef.child('sass');

	sassRef.on('value', snap => {
		this.setState({
			sassLevel: snap.val()
		});	
	})
	

}



  	render(){
  		return(
  			<div>
  			<p> media screen </p> 
  			<p> Sass : {this.state.sassLevel} </p>
  			</div>
  			)
  	}
}
export default Sass;