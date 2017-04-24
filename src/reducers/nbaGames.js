import { GET_NBA_GAMES } from '../actions';

const initialState = {
	data: [],

};


export default function nbaGames(state = initialState, action) {
	switch (action.type) {
		case GET_NBA_GAMES:
			console.log('test')
			return {
				...state, data: JSON.parse(action.payload.body)
			};
		default:
			return state;

	}
}