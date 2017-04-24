import request from 'superagent'
import getDay from '../utils/getDay'

export const TEST_ACTION = 'TEST_ACTION';
export const GET_NBA_GAMES = 'GET_NBA_GAMES';

const DAY = getDay();
const NBA_API_URL = 'http://integrations.xchangefusion.com/api/nba/'



export function testAction (term = null) {

	console.log(term);
	return {
		type : TEST_ACTION,
		term : term
	}
}

export function getNbaGames () {
	const data = request.get( NBA_API_URL + DAY );

	return {
		type: GET_NBA_GAMES,
		payload : data
		}	

}
