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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrders = exports.filterOrders = exports.deleteOrders = exports.UpdateOrders = exports.setOrders = exports.getOrders = void 0;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.getOrders = getOrders;
const setOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.setOrders = setOrders;
const UpdateOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.UpdateOrders = UpdateOrders;
const deleteOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.deleteOrders = deleteOrders;
const filterOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.filterOrders = filterOrders;
const searchOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.searchOrders = searchOrders;
