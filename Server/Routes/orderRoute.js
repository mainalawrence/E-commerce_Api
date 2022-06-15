"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../Controller/Orders/orderController");
const router = express_1.default.Router();
router.get('/Orders', orderController_1.getOrders);
router.put('/Orders', orderController_1.UpdateOrders);
router.post('/Orders', orderController_1.setOrders);
router.post('/Orders', orderController_1.filterOrders);
router.post('/Orders', orderController_1.searchOrders);
router.delete('/Orders', orderController_1.deleteOrders);
exports.default = router;
