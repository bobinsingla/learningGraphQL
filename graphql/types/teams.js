import {
	GraphQLID,
	GraphQLObjectType, 
	GraphQLInputObjectType, 
	GraphQLNonNull, 
	GraphQLList,
	GraphQLString} from 'graphql';

import {player} from "./players"; 
import playerModel from '../../models/player';

export const team = new GraphQLObjectType({
	name: 'team',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		country: {
			type: new GraphQLNonNull(GraphQLString)
		}, 
		players:{
			type: new GraphQLList(player),
			resolve: function(data, params){
				return new Promise(function(resolve, reject){
					playerModel.find({teamId: data.id})
					.then(function(players){
						resolve(players);
					})
					.catch(function(error){
						reject(error);
					});
				});
			}
		}
	}) 
}) 

export const teamInput = new GraphQLInputObjectType({
	name: 'teamInput',
	fields: () => ({
		name: {
			type: GraphQLString
		},
		country: {
			type: GraphQLString
		},
		playersIds: {
			type: new GraphQLList(GraphQLString)
		}
	})
})