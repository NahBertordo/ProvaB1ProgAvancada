"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SecretariaController_1 = __importDefault(require("../controllers/SecretariaController"));
const secretariaRouter = (0, express_1.Router)();
secretariaRouter.post("/criar", SecretariaController_1.default.criarSecretaria);
secretariaRouter.get("/listar", SecretariaController_1.default.listarSecretaria);
secretariaRouter.patch("/:id", SecretariaController_1.default.updateSecretaria);
secretariaRouter.delete("/:id", SecretariaController_1.default.deletarSecretaria);
exports.default = secretariaRouter;
