import { Request, Response } from "express";
import ConsultaServices from "../services/ConsultaServices";

class consultaController{

    constructor(){}

    async criarConsulta(req: Request, res: Response) {
        try {
          const consulta = await ConsultaServices.criarConsulta(req.body);
          res.status(200).json({ status: "ok", consulta: consulta });
        } catch (error) {
          res.status(500).json({ status: "error", message: (error as any).message });
        }
      }

    async listarConsultas(req: Request, res: Response){
        try{
            const consultas = await ConsultaServices.listarConsulta();
            res.status(200).json({status: "ok", consultas: consultas});
        }catch(error){
            res.status(500).json({status: "ok", message: (error as any).message});
        }
    }

    async upedateConsultas(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const consultas = await ConsultaServices.updateConsulta(id, req.body);
            res.status(200).json({status: "ok", consultas: consultas});
        }catch(error){
            res.status(500).json({status: "Error", message: (error as any).message})
        }
    }

    async deletarConsultas(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const consultas = await ConsultaServices.deletarConsulta(id);
            res.status(200).json({status: "ok", consultas: consultas});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
}

export default new consultaController