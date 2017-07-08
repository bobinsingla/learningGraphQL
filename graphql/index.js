import {GraphQLSchema, GraphQLObjectType} from 'graphql';

import mutations from './mutations';
import query from './query';

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: query
	}),
	
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
	})
});