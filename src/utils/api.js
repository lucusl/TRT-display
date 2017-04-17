let axios = require('axios');


let dayOfYear = getDay();
 // get todats date in required format 
 	function getDay() {
  		var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  		var yearFirstDay = Math.floor(timestmp / 86400000);
  		var today = Math.ceil((new Date().getTime()) / 86400000);
  		var dayOfYear = today - yearFirstDay;

    console.log(dayOfYear)
  		return dayOfYear - 6;
  	}



module.exports = {
	fetchTodaysGames : function (){
		var URL = 'http://integrations.xchangefusion.com/api/nba/'+ dayOfYear;
		return axios.get(URL)
			.then ( function (response){
				console.log(response.data);
				return JSON.parse(response.data);

			})
			 .catch(function (error) {
    			console.log(error);
			  });

		}
	}
