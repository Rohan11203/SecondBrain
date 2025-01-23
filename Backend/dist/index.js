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
const auth_1 = require("./auth/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validate_1 = require("./validators/validate");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const parsedData = validate_1.validateUserData.safeParse(req.body);
    if (!parsedData.success) {
        console.log("Validation Failed", parsedData);
        return res.status(400).json({
            message: "Validation Failed",
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 5);
    try {
        yield db_1.UserModel.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            success: true,
            message: "Signin Succesfull",
        });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json({
            message: "Email Already exists",
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
        if (!response) {
            return res.status(403).json({
                message: "Email does not exists"
            });
        }
        const passwordMatch = bcrypt_1.default.compareSync(password, response.password);
        if (!passwordMatch) {
            return res.status(403).json({
                message: "Incorrect Password"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: response === null || response === void 0 ? void 0 : response._id
        }, jwtSecret);
        // Store it in cookie
        // return res.status(200).cookie("token", token, { httpOnly: true }).json({
        //   success: true,
        //   token:token,
        //   message: "Signup succesfull"
        // })
        return res.status(200).json({
            success: true,
            token: token,
            message: "Signup succesfull"
        });
    }
    catch (error) {
        console.log("Error", error);
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }
}));
app.post("/api/v1/content", auth_1.UserAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, type, link, tags } = req.body;
    try {
        const response = yield db_1.ContentModel.create({
            title,
            type,
            link,
            tags,
            userId: req.userId,
        });
        if (!response) {
            return res.status(401).json({
                message: "Failed to add content"
            });
        }
        res.json({
            message: "Content added Succesfully"
        });
    }
    catch (error) {
        return res.status(403).json({
            Error: "Error While adding content", error
        });
    }
}));
app.get("/api/v1/content", auth_1.UserAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contentData = yield db_1.ContentModel.find({ userId: req.userId });
        res.status(201).json({
            message: "All content",
            contentData,
        });
    }
    catch (error) {
        return res.status(401).json({
            Error: "Error while getting content", error
        });
    }
}));
app.delete("/api/v1/content", auth_1.UserAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contentId } = req.body;
    try {
        const response = yield db_1.ContentModel.findByIdAndDelete(contentId);
        if (!response) {
            return res.status(401).json({
                message: "Invalid content Id"
            });
        }
        res.json({
            message: "Content deleted succesfully"
        });
    }
    catch (error) {
        return res.status(401).json({
            Error: "Error while Deleting", error
        });
    }
}));
app.post("/api/v1/brain/share", (req, res) => {
    res.json({
        message: "sharable Link"
    });
});
app.get("/api/v1//brain/:shareLink", (req, res) => {
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
