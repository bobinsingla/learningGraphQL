import { GraphQLList } from 'graphql';

import { team } from '../types/teams';
import teamModel from '../../models/team';

export default {
	type: new GraphQLList(team),
	resolve() {
		const teams = teamModel.find().exec()
		return teams
	}
}