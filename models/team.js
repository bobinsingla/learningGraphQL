import mongoose from 'mongoose';
var ObjectId = mongoose.Schema.Types.ObjectId;

const teamSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	playersIds:{
		type: [ObjectId],
		required: false
	}
});

export default mongoose.model("team", teamSchema);