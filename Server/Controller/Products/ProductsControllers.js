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
const FileImagetoUrl_1 = require("../../Utility/FileImagetoUrl");
const fs_1 = __importDefault(require("fs"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send((0, FileImagetoUrl_1.imagetoUrl)(fs_1.default.realpathSync('Images/Product/images-1655304346990-767892495')));
    }
    catch (error) {
        return res.json({ message: "Internal Error", error });
    }
});
exports.getProducts = getProducts;
const setProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const myfoles=req.files[0];
        const files = req.files;
        res.json(files[0].filename);
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
