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
exports.searchProducts = exports.filterProducts = exports.deleteProducts = exports.UpdateProducts = exports.setProducts = exports.getProducts = void 0;
const configaration_1 = __importDefault(require("../../Database/configaration"));
const uid_1 = require("uid");
const mssql_1 = __importDefault(require("mssql"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .execute('getProducts');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No users", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.getProducts = getProducts;
const setProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, brand, image, category, description, features, specification } = req.body;
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, (0, uid_1.uid)(32))
            .input('name', mssql_1.default.VarChar, name)
            .input('price', mssql_1.default.BigInt, price)
            .input('brand', mssql_1.default.VarChar, brand)
            .input('image', mssql_1.default.NVarChar, image)
            .input('category', mssql_1.default.VarChar, category)
            .input('description', mssql_1.default.VarChar, description)
            .input('features', mssql_1.default.NVarChar, features)
            .input('specification', mssql_1.default.NVarChar, specification)
            .execute('createProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
        const files = req.files;
        //  res.json(files[0].filename;
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.setProducts = setProducts;
const UpdateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, brand, image, category, description, features, specification } = req.body;
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .input('name', mssql_1.default.VarChar, name)
            .input('price', mssql_1.default.BigInt, price)
            .input('brand', mssql_1.default.VarChar, brand)
            .input('image', mssql_1.default.NVarChar, image)
            .input('category', mssql_1.default.VarChar, category)
            .input('description', mssql_1.default.VarChar, description)
            .input('features', mssql_1.default.NVarChar, features)
            .input('specification', mssql_1.default.NVarChar, specification)
            .execute('updateProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.UpdateProducts = UpdateProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .execute('deleteProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.deleteProducts = deleteProducts;
const filterProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.filterProducts = filterProducts;
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('name', mssql_1.default.VarChar, req.params.search)
            .execute('SearchProducts');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product Search was successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.searchProducts = searchProducts;
