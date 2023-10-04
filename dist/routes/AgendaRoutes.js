"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AgendaController_1 = __importDefault(require("../controllers/AgendaController"));
const agendaRouter = (0, express_1.Router)();
agendaRouter.post("/criar", AgendaController_1.default.criarAgenda);
agendaRouter.get("/listar", AgendaController_1.default.listarAgenda);
agendaRouter.patch("/:id", AgendaController_1.default.updateAgenda);
agendaRouter.delete("/:id", AgendaController_1.default.deletarAgenda);
exports.default = agendaRouter;
