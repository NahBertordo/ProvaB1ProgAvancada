"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultaController_1 = __importDefault(require("../controllers/ConsultaController"));
const consultaRouter = (0, express_1.Router)();
consultaRouter.post("/criar", ConsultaController_1.default.criarConsulta);
consultaRouter.get("/listar", ConsultaController_1.default.listarConsultas);
consultaRouter.patch("/:id", ConsultaController_1.default.upedateConsultas);
consultaRouter.delete("/:id", ConsultaController_1.default.deletarConsultas);
exports.default = consultaRouter;
