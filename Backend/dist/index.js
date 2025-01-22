"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("./auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
        yield db_1.UserModel.create({
            username,
            email,
            password,
        });
        res.json({
            message: "Signin Succesfull",
        });
    }
    catch (error) {
        console.log("Error", error);
        res.json({
            message: error
        });
    }
}));
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT secret is not defined in environment variables");
        }
        const response = yield db_1.UserModel.findOne({ email });
        const token = jsonwebtoken_1.default.sign({
            userId: response === null || response === void 0 ? void 0 : response._id
        }, jwtSecret);
        res.json({
            success: true,
            token: token,
            message: "Signup succesfull"
        });
    }
    catch (error) {
        console.log("Error", error);
        return res.json({
            message: "Invalid email or password",
        });
    }
}));
app.get("/api/v1/content", auth_1.UserAuth, (req, res) => {
    res.json({
        message: "All content"
    });
});
app.post("/api/v1/add-content", (req, res) => {
    res.json({
        message: "Content added"
    });
});
app.delete("/api/v1/delete", (req, res) => {
    res.json({
        message: "Content deleted succesfully"
    });
});
app.post("/api/v1/share", (req, res) => {
    res.json({
        message: "sharable Link"
    });
});
app.get("/api/v1/:id", (req, res) => {
    res.json({
        message: "Content of another user"
    });
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const MONGO_URL = process.env.MONGO_URL;
            if (!MONGO_URL) {
                throw new Error("MONGO_URL is not defined in environment variables");
            }
            yield mongoose_1.default.connect(MONGO_URL);
            console.log("Database Connected");
            const PORT = 3000;
            app.listen(PORT, () => {
                console.log(`Server is Listining on Port ${PORT}`);
            });
        }
        catch (e) {
            console.log("Error WHile running Server", e);
        }
    });
}
main();
