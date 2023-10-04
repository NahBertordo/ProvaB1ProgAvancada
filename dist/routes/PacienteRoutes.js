"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacienteController_1 = __importDefault(require("../controllers/PacienteController"));
const pacienteRouter = (0, express_1.Router)();
pacienteRouter.post("/criar", PacienteController_1.default.criarPaciente);
pacienteRouter.get("/listar", PacienteController_1.default.listarPaciente);
pacienteRouter.patch("/:id", PacienteController_1.default.updatePaciente);
pacienteRouter.delete("/:id", PacienteController_1.default.deletarPaciente);
exports.default = pacienteRouter;
