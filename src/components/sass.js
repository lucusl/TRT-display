import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../styles/sass.styles.css';


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
  		let sassHeightStyle = { height: '0%'}
  		sassHeightStyle.height = this.state.sassLevel + '%';

  		console.log(sassHeightStyle.height);
  		return(
  			<div className= 'sass-container'>
	  			<div className= 'sass-level' style= {sassHeightStyle}>
			  		 <div><p> Sass : {this.state.sassLevel} </p></div>
			  		<div> TEST</div>
			  		<div className='sass-bar grad-bg' > test </div>
			  	</div>		
			</div>
  			)
  	}
}
export default Sass;