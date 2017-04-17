import React, { Component } from 'react';
import Sass from '../components/sass'
import OfficeTimes from '../components/officetimes'
import '../styles/media.styles.css';
var api = require('../utils/api')


function Games(props){
	return (
		<p>{props.teamName}</p>
		)
}


class MediaApp extends Component {
constructor(props){
	super(props);

	this.state = {
		gameData: null,
		teamOne: null,
		teamTwo: null
	}

	this.getGameData = this.getGameData.bind(this);
}


componentDidMount() {
		this.getGameData();
	}

getGameData(){
		api.fetchTodaysGames().then( function(gameData){
			this.setState(function () {
				console.log(gameData);
					return {
						gameData: gameData,
						teamOne: gameData.teams[0]
					}
				})
		}.bind(this));
}
  render(){
  
  		return(
  			<div className='container'>
	  			<Sass/>
	  			<h2 className= 'intro'> Welcome <br/> to Task retail technology </h2>
	  			<OfficeTimes location= 'Poland'/>
	  			<Games teamName='tets'/>
  			</div>
  			)
 		 }
  	}

export default MediaApp;