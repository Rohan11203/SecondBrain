"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContentModel = exports.TagsModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contentTypes = ['image', 'video', 'article', 'audio'];
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const TagsSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
});
const ContentSchema = new mongoose_1.default.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'user' },
    tags: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'tags' }],
    createdAt: { type: Date, default: Date.now },
});
const LinkSchema = new mongoose_1.default.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "user" },
});
exports.UserModel = mongoose_1.default.model('user', UserSchema);
exports.TagsModel = mongoose_1.default.model('tags', TagsSchema);
exports.ContentModel = mongoose_1.default.model('content', ContentSchema);
exports.LinkModel = mongoose_1.default.model('link', LinkSchema);
