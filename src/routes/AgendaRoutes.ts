
import { Router } from "express";
import AgendaController from "../controllers/AgendaController";

const agendaRouter = Router();

agendaRouter.post("/criar", AgendaController.criarAgenda);
agendaRouter.get("/listar", AgendaController.listarAgenda);
agendaRouter.patch("/:id", AgendaController.updateAgenda);
agendaRouter.delete("/:id", AgendaController.deletarAgenda);

export default agendaRouter;