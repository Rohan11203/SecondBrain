"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function UserAuth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    try {
        const userSecret = process.env.USER_SECRET;
        if (!userSecret) {
            throw new Error('No user secret provided');
        }
        const response = jsonwebtoken_1.default.verify(token, userSecret);
        if (response) {
            req.userId = response;
            next();
        }
        else {
            return res.status(401).json({ message: 'unauthorized' });
        }
        console.log("response", response);
    }
    catch (error) {
        console.log("Failed to verify token", error);
    }
}
exports.UserAuth = UserAuth;
