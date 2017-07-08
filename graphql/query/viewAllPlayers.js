import { GraphQLList } from 'graphql';

import { player } from '../types/players';
import playerModel from '../../models/player';

export default {
	type: new GraphQLList(player),
	resolve() {
		const players = playerModel.find().exec()
		return players
	}
}