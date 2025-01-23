"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = UserAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function UserAuth(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    const token = authHeader;
    if (!token) {
        return res.status(401).json({ message: 'Malformed token.' });
    }
    try {
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JwtSecret not provided");
        }
        ;
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        if (decoded) {
            req.userId = decoded.userId;
            next();
        }
    }
    catch (error) {
        console.error('JWT Verification Error:', error);
        res.status(401).json({ message: 'Unauthorized access.' });
    }
}
