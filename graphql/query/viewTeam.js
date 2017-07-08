import { GraphQLID, GraphQLNonNull } from 'graphql';

import { team } from '../types/teams';
import teamModel from '../../models/team';


export default {
	type: team,
	arg: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(roots, params) {
		let newTeam;
		return new Promise(function(resolve, reject){
			teamModel.findById(params.id).exec();
		});
	}
}
