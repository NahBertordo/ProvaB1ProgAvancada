import { Request, Response } from "express";
import AgendaServices from "../services/AgendaServices";

class agendaController{

    constructor(){}

      async criarAgenda(req: Request, res: Response) {
        try {
          const agendas = await AgendaServices.criarAgenda(req.body);
          res.status(200).json({status: "ok", agenda: agendas });
        } catch (error) {
          res.status(500).json({status: "error", message: (error as any).message });
        }
      }

      async listarAgenda(req: Request, res: Response){
        try{
            const agendas = await AgendaServices.listarAgendas();
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message})
        }
      }

      async updateAgenda(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);                                     // Json é corno e trabalha com String, tem que transfromar o Id em inteiro antes
            const agendas = await AgendaServices.updateAgenda(id, req.body);
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }

      async deletarAgenda(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);     
            const agendas = await AgendaServices.deletarAgenda(id);
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error",message: (error as any).message});
        }
      }
}
export default new agendaController