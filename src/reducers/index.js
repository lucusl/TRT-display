import { combineReducers } from 'redux';
// add reducers here to combine into one source
import TestReducer from './test';
import NbaGamesReducer from './nbaGames'

const rootReducer = combineReducers ({
	// add reducers here to combine into one source
	// e.g reducer: reducerReducer
	testData : TestReducer,
	nbaData: NbaGamesReducer

});


export default rootReducer;
