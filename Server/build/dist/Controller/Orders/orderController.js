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
exports.searchOrders = exports.filterOrders = exports.deleteOrders = exports.UpdateOrders = exports.setOrders = exports.getOrders = void 0;
const configaration_1 = __importDefault(require("../../Database/configaration"));
const mssql_1 = __importDefault(require("mssql"));
const uid_1 = require("uid");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .execute('getOrders');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No Orders", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.getOrders = getOrders;
const setOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { TotalCost, orders, userid } = req.body;
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input("id", mssql_1.default.VarChar(100), (0, uid_1.uid)(32))
            .input("userid", mssql_1.default.VarChar(100), userid)
            .input('TotalCost', mssql_1.default.Money, TotalCost)
            .input('orders', mssql_1.default.NVarChar(), orders)
            .execute('createOrders');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No Orders", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.setOrders = setOrders;
const UpdateOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { TotalCost, orders, userid } = req.body;
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input("id", mssql_1.default.VarChar(100), req.params.id)
            .input("userid", mssql_1.default.VarChar(100), userid)
            .input('TotalCost', mssql_1.default.Money, TotalCost)
            .input('orders', mssql_1.default.NVarChar(), orders)
            .execute('updateOrder');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No Orders", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.UpdateOrders = UpdateOrders;
const deleteOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar(100), req.params.id)
            .execute('getProducts');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No users", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.deleteOrders = deleteOrders;
const filterOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.filterOrders = filterOrders;
const searchOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('name', mssql_1.default.VarChar, req.params.search)
            .execute('SearchOrder');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product Search was successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.searchOrders = searchOrders;
