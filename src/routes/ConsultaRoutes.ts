import { Router } from "express";
import ConsultaController from "../controllers/ConsultaController";

const consultaRouter = Router();

consultaRouter.post("/criar", ConsultaController.criarConsulta);
consultaRouter.get("/listar", ConsultaController.listarConsultas);
consultaRouter.patch("/:id", ConsultaController.upedateConsultas);
consultaRouter.delete("/:id", ConsultaController.deletarConsultas);

export default consultaRouter