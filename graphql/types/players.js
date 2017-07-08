import {
	GraphQLID, 
	GraphQLObjectType, 
	GraphQLInputObjectType, 
	GraphQLNonNull, 
	GraphQLString} from 'graphql';

export const player = new GraphQLObjectType({
	name : 'player',
	fields: () => ({
		_id: {
			type : new GraphQLNonNull(GraphQLID)
		},
		name: {
			type : GraphQLString
		},
		country: {
			type : GraphQLString
		}
	})
})

export const playerInput = new GraphQLInputObjectType({
	name: 'playerInput',
	fields: () => ({
		name: {
			type: GraphQLString
		},
		country: {
			type: GraphQLString
		}
	})
})