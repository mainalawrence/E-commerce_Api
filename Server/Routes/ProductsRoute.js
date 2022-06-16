"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsControllers_1 = require("../Controller/Products/ProductsControllers");
const ProductImageUpload_1 = require("../Utility/ProductImageUpload");
const router = express_1.default.Router();
router.get('/products', ProductsControllers_1.getProducts);
router.put('/products', ProductsControllers_1.UpdateProducts);
router.post('/products', ProductImageUpload_1.upload.single('product'), ProductsControllers_1.setProducts);
router.post('/products', ProductsControllers_1.filterProducts);
router.post('/products/:name', ProductsControllers_1.searchProducts);
router.delete('/products', ProductsControllers_1.deleteProducts);
exports.default = router;
