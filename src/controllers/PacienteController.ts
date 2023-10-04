import { Request, Response } from "express";
import PacienteServices from "../services/PacienteServices";

class pacienteController{

    constructor(){}
    
    async criarPaciente(req: Request, res: Response) {
        try {
          const paciente = await PacienteServices.criarPaciente(req.body);
          res.status(200).json({ status: "ok", paciente: paciente });
        } catch (error) {
          res.status(500).json({ status: "error", message: (error as any).message });
        }
      }

    async listarPaciente(req: Request, res: Response){
        try{
            const pacientes = await PacienteServices.listarPaciente();
            res.status(200).json({status: "ok", pacientes: pacientes});
        }catch(error){
            res.status(500).json({status: "ok", message: (error as any).message});
        }
    }

    async updatePaciente(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const pacientes = await PacienteServices.updatePaciente(id, req.body);
            res.status(200).json({status: "ok", pacientes: pacientes});
        }catch(error){
            res.status(500).json({status: "Error", message: (error as any).message})
        }
    }

    async deletarPaciente(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const pacientes = await PacienteServices.deletarPaciente(id);
            res.status(200).json({status: "ok", pacientes: pacientes});
        }catch(error){
            res.status(500).json({status: "ok", message: (error as any).message});
        }
    }
}

export default new pacienteController