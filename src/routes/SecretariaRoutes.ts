import { Router } from "express";
import SecretariaController from "../controllers/SecretariaController";

const secretariaRouter = Router();

secretariaRouter.post("/criar", SecretariaController.criarSecretaria);
secretariaRouter.get("/listar", SecretariaController.listarSecretaria);
secretariaRouter.patch("/:id",  SecretariaController.updateSecretaria);
secretariaRouter.delete("/:id", SecretariaController.deletarSecretaria);

export default secretariaRouter