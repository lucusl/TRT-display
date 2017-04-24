export const TEST_ACTION = 'TEST_ACTION';

const initialState = {
	term: 'test'
};


export default function getTerm(state = initialState, action) {
	switch (action.type) {
		case TEST_ACTION:
			console.log()
			return {
				...state, term: action.term
			};
		default:
			return state;

	}
}