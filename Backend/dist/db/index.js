"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true }
});
exports.UserModel = mongoose_1.default.model('user', UserSchema);
