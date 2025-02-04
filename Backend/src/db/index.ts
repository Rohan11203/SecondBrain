import mongoose from 'mongoose'

const contentTypes = ['youtube', 'twitter'];

const UserSchema = new mongoose.Schema({
  username: { type: String,required: true },
  email: { type: String, unique:true, required: true },
  password: { type: String, required: true }
});

const TagsSchema = new mongoose.Schema({
  title: { type: String, required: true},
})

const ContentSchema = new mongoose.Schema({

  link: { type: String, required: true},
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tags' }],
  createdAt: { type: Date, default: Date.now },

});

const LinkSchema = new mongoose.Schema({
  hash: { type: String, required: true},
  userId: { type : mongoose.Schema.Types.ObjectId, ref:"user" },
});


export const UserModel = mongoose.model('user', UserSchema);
export const TagsModel = mongoose.model('tags',TagsSchema);
export const ContentModel = mongoose.model('content', ContentSchema)
export const LinkModel = mongoose.model('link', LinkSchema);
