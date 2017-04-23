import React from 'react'; 

class TestSearch extends React.Component {
	onInputChange(term){
		this.props.onTermChange(term);
	}


	render(){
		return (
			<div>
				<input placeholder='enter test here' onChange={event => this.onInputChange(event.target.value)} />
			</div>

			);
		}

	}

	export default TestSearch;