import { GraphQLID, GraphQLNonNull } from 'graphql';

import { player } from '../../types/players';
import playerModel from '../../../models/player';

export default {
	type: player,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(roots, params){
		const removePlayer = playerModel.findByIdAndRemove(params.id).exec();
		return removePlayer
	}
}