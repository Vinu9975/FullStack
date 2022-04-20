import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name:String,
    username: String,
    email: String,
    phone: Number
});

const postUser=mongoose.model('user1122',UserSchema);
export default postUser;