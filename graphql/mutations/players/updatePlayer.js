/*var updateAllPlayer = function(where, update, options, callback){
    player.update(where, update, options, callback)      
}

var where = {_id: { $in: players_id}};
var update = {team_id: team._id };		
controller.player.updateAllPlayer(where, update, {multi:true}, function(err, playerList){
	if(err){
	    console.error(err.toString());
	}else{
    	console.log(playerList);
	}
});*/


import { GraphQLNonNull, GraphQLID } from 'graphql';

import { player, playerInput } from '../../types/players';
import playerModel from '../../../models/player';

export default {
	type: player,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID) 
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(playerInput)
		}
	},
	resolve(root, params){
		return playerModel.findByIdAndUpdate(
			params.id,
			{ $set: {...params.data} },
			{ new: true }
		)
	}
}