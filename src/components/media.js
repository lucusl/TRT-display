import React, { Component } from 'react';
import Sass from '../components/sass'
import OfficeTimes from '../components/officetimes'
import '../styles/media.styles.css';
var api = require('../utils/api')


function Games(props){
	return (
		<div>
			<p>{props.games[props.gameId].DateOfGame}</p>
		</div>
		)
}


class MediaApp extends Component {
constructor(props){
	super(props);

	this.state = {
		gamesInfo: null,
		numOfgames : 1,
		isGameDay: false


	};

	this.getGameData = this.getGameData.bind(this);

}


componentDidMount() {
		this.getGameData();
	}

getGameData(){
		this.setState( function (){
			return {
				gamesInfo: null,
				numOfgames: null,
				isGameDay: false
			}
		})

		api.fetchTodaysGames()
		.then(function(gameData){
			this.setState( function () {
					console.log(gameData);
					let gameDay = !gameDay;
					console.log(gameDay);
					return {
						gamesInfo: gameData,
						numOfgames : gameData.length,
						isGameDay: gameDay

					}
				})
		}.bind(this));
}


  render(){

  		return(
  			<div className='container'>
	  			<h2 className= 'intro'> Welcome <br/> to Task retail technology </h2>
	  			<OfficeTimes location= 'Poland'/>


	  			{!this.state.isGameDay ? <p>NOT GAME DAY</p> 
	  				: <div>
	  			{!this.state.gamesInfo ? <p>LOADING MUTHA FUK**A </p>	
					: <Games games= {this.state.gamesInfo} gameId = {0} />
				}
				</div>}
				<Sass/>

  			</div>
  			)
 		 }
  	}

export default MediaApp;