import {GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

import {team, teamInput} from '../../types/teams';
import teamModel from '../../../models/team';
import Promise from 'bluebird';
import playerModel from '../../../models/player';

export default {
	type: team,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(teamInput)
		}
	},

	resolve(root, params){
		const tModel = new teamModel(params.data);
		let newTeam;
		return new Promise(function(resolve, reject){
			tModel.save()
				.then(function(team){
					if(team){
						newTeam = team;
						if(team.playersIds){
							if(team.playersIds.length){
								var promiseList =  [];
								team.playersIds.forEach(function(playerId){
									promiseList.push(
										(function(team, playerId, playerModel){
											return new Promise(function(resolve, reject){
												playerModel.update({
													_id: playerId
												}, {
													teamId: team.id
												}, {multi:false}, function(err , done){
													if(err){
														reject(err);
													}else{
														resolve(team);
													}
												});
											});//Promise 
										})(team, playerId, playerModel)//Anonymous Function
									);//Push
								});
								return Promise.all(promiseList);
							}
						}
					}
				})
				.then(function(){
					resolve(newTeam);
				})
				.catch(function(error){
					reject(error);
				});
		});
	}
}