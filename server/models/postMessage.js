import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const postSchema = mongoose.Schema({
    name:String,
    caption:String,
    url:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default:new Date()
    },
});
postSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
postSchema.set('toJSON', {
    virtuals: true
});
const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;