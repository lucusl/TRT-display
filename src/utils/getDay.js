export default function getDay() {
  		var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  		var yearFirstDay = Math.floor(timestmp / 86400000);
  		var today = Math.ceil((new Date().getTime()) / 86400000);
  		var dayOfYear = today - yearFirstDay;

	    console.log(dayOfYear)
  		return /*dayOfYear */ 101
  		;
  	}

