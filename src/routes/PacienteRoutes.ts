import { Router } from "express";
import PacieteController from "../controllers/PacienteController";

const pacienteRouter = Router();

pacienteRouter.post("/criar", PacieteController.criarPaciente);
pacienteRouter.get("/listar", PacieteController.listarPaciente);
pacienteRouter.patch("/:id", PacieteController.updatePaciente);
pacienteRouter.delete("/:id", PacieteController.deletarPaciente);

export default pacienteRouter