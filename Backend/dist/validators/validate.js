"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const zod_1 = require("zod");
exports.validateUserData = zod_1.z.object({
    username: zod_1.z.string().trim().min(1, "Name is required").max(100, "Name should not exceed 100 characters"),
    email: zod_1.z.string().trim().email("Invalid email format").max(255, "Email should not exceed 255 characters"),
    password: zod_1.z.string().min(6, "Password should be at least 6 characters long").max(100, "Password should not exceed 100 characters")
});
