"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Connect_1 = require("./Database/Connect");
const UsersRoute_1 = __importDefault(require("./Routes/UsersRoute"));
const ProductsRoute_1 = __importDefault(require("./Routes/ProductsRoute"));
const orderRoute_1 = __importDefault(require("./Routes/orderRoute"));
const AuthRoute_1 = __importDefault(require("./Routes/AuthRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//access controller
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('Images'));
//connect to database
(0, Connect_1.dbConnection)();
//Main routes
app.use("/api", UsersRoute_1.default);
app.use("/api", ProductsRoute_1.default);
app.use("/api", orderRoute_1.default);
app.use("/auth", AuthRoute_1.default);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Listening at port ${port}`);
});
