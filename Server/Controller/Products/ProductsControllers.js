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
exports.searchProducts = exports.filterProducts = exports.deleteProducts = exports.UpdateProducts = exports.setProducts = exports.getProducts = void 0;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.getProducts = getProducts;
const setProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.setProducts = setProducts;
const UpdateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.UpdateProducts = UpdateProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.searchProducts = searchProducts;
