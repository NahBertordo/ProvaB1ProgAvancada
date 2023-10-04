import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Consulta{

    constructor(){}

    async criarConsulta(crConsulta: any) {
        try {
          const consulta = await prisma.consulta.create({
            data: {
              data: crConsulta.data,
              nomePcnte: crConsulta.nomePcnte,
              nomeDents: crConsulta.nomeDents,
              pacienteId: crConsulta.pacienteId,
            }
          });
          return consulta;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao criar consulta");
        }
    }

    async listarConsulta(){
        try{
            const consulta = await prisma.consulta.findMany()
            return consulta;
        }catch(error){
            throw new Error ("Error ao listar as Consultas")
        }
    }

    async updateConsulta(id: number, upConsulta: any) {
        try {
          const consulta = await prisma.consulta.update({
            where: { id: id },
            data: upConsulta
          });
          return consulta;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao atualizar consulta");
        }
      }

    async deletarConsulta(id: number){
        try{
            const consulta = await prisma.consulta.delete({
                where: {id: id}
            });
            return consulta;
        }catch(error){
            throw new Error ("Error ao Deletar as consultas")
        }
    }
}

export default new Consulta