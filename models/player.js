import mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

const playerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true		
	},
	teamId:{
		type: ObjectId 
	}
});

export default mongoose.model('player', playerSchema);