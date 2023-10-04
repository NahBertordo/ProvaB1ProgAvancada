import { Request, Response } from "express";
import SecretariaServices from "../services/SecretariaServices";

class secretariaController{

    constructor(){}

    async criarSecretaria(req: Request, res: Response){
        try{
            const secretarias = SecretariaServices.criarSecretaria(req.body);
            res.status(200).json({status: "ok", secretarias: secretarias});
        }catch(error){
            res.status(500).json({status: "Error", message: (error as any).message});
        }
    }

    async listarSecretaria(req: Request, res: Response) {
        try {
          const secretarias = await SecretariaServices.listarSecretarias();
          res.status(200).json({ status: "ok", secretarias: secretarias });
        } catch (error) {
          res.status(500).json({ status: "error", message: (error as any).message });
        }
      }

    async updateSecretaria(req: Request, res: Response){
       try{
        const id = parseInt(req.params.id);
        const secretarias = SecretariaServices.updateSecretarias(id, req.body);
        res.status(200).json({status: "ok", secretarias: secretarias });
        }catch(error){
            res.status(500).json({status: "error", messagem: (error as any).message});
        }
    }

    async deletarSecretaria(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id)
            const secretarias = SecretariaServices.deletarSecretarias(id);
            res.status(200).json({status: "ok", secretarias: secretarias});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
}

export default new secretariaController