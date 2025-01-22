import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: { type: String,require: true },
  email: { type: String, unique:true, require: true },
  password: { type: String, require: true }
})


export const UserModel = mongoose.model('user', UserSchema);
