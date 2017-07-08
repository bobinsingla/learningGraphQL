import {GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

import {player, playerInput} from '../../types/players';
import playerModel from '../../../models/player';

export default {
	type: player, 
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(playerInput)
		}
	},

	resolve(root, params){
		const pModel = new playerModel(params.data);
		const newPlayer = pModel.save();
		return newPlayer
	}
}