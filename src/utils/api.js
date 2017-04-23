let axios = require('axios');


let dayOfYear = getDay();
 // get todats date in required format 
 	function getDay() {
  		var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  		var yearFirstDay = Math.floor(timestmp / 86400000);
  		var today = Math.ceil((new Date().getTime()) / 86400000);
  		var dayOfYear = today - yearFirstDay;

	    console.log(dayOfYear)
  		return dayOfYear + 1;
  	}



module.exports = {

	fetchPopularRepos: function (language){
		var encodedURI = window.encodeURI ('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
	
		return axios.get(encodedURI)
			.then ( function (response ){
				console.log(response.data.items);
				return response.data.items;

			});

	},
	fetchTodaysGames : function (){
		var URL = 'http://integrations.xchangefusion.com/api/nba/'+ dayOfYear;
		return axios.get(URL)
			.then ( function (response){
					console.log(response.data);
					let data = JSON.parse(response.data);
					let games = data.Games;
					console.log(games)
				return games;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

		}
	}
