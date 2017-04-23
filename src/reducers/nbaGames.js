import { GET_NBA_GAMES } from '../actions';

const initialState = {
	data: ['test']
};


export default function nbaGames(state = initialState, action) {
	switch (action.type) {
		case GET_NBA_GAMES:
			console.log('test')
			return {
				...state, data: action.payload.body.data
			};
		default:
			return state;

	}
}