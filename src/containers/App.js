import React from 'react';
import TestComp from '../components/testComponent.js';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import TestSearch from '../components/testSearch'
import{ connect } from 'react-redux';



class App extends React.Component{
	render(){
		return (
			<div>
				<TestComp simple='test' testData = { this.props.testData } />
				<TestSearch onTermChange={this.props.actions.testAction} />
				<p></p>
			</div>
			)
	}
	componentDidMount() {
		this.props.actions.getNbaGames();
	}

}


function mapStateToProps(state){
	return {
		testData: state.testData.term,
		nbaData: state.nbaData.data
			};
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);