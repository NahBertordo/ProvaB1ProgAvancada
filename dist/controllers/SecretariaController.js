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
const SecretariaServices_1 = __importDefault(require("../services/SecretariaServices"));
class secretariaController {
    constructor() { }
    criarSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretarias = SecretariaServices_1.default.criarSecretaria(req.body);
                res.status(200).json({ status: "ok", secretarias: secretarias });
            }
            catch (error) {
                res.status(500).json({ status: "Error", message: error.message });
            }
        });
    }
    listarSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretarias = yield SecretariaServices_1.default.listarSecretarias();
                res.status(200).json({ status: "ok", secretarias: secretarias });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
    updateSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const secretarias = SecretariaServices_1.default.updateSecretarias(id, req.body);
                res.status(200).json({ status: "ok", secretarias: secretarias });
            }
            catch (error) {
                res.status(500).json({ status: "error", messagem: error.message });
            }
        });
    }
    deletarSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const secretarias = SecretariaServices_1.default.deletarSecretarias(id);
                res.status(200).json({ status: "ok", secretarias: secretarias });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
}
exports.default = new secretariaController;
