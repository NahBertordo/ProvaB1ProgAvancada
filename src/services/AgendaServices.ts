import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class agendaServices{

    constructor(){}

    async criarAgenda(crAgenda: any){                          
        try{
            const agenda = await prisma.agenda.create({
                data: {   
                    id: crAgenda.id,                                  
                    data: crAgenda.data,
                    nomePcnte: crAgenda.nomePcnte,
                    secretariaId: crAgenda.secretariaId
                }
            });
            return agenda;
        } catch(error){
            throw new Error("Error ao criar uma nova Agenda")   
        }
    }

    async listarAgendas(){                                      
        try{
            const agenda = await prisma.agenda.findMany();
            return agenda;
        }catch (error){
                throw new Error ("Error ao listar as agendas")
            } 
    }

    async updateAgenda(id: number, upAgenda: any){                                     
        try{
            const agenda = await prisma.agenda.update({
                where: { id : id},
                data: upAgenda
            });
            return agenda;
        }catch (error){
            throw new Error ("Error ao Atualizar a lista")
        }
    }

    async deletarAgenda(id : number){                                      
        try{
            const agenda = await prisma.agenda.delete({
                where: {id : id}
            });
            return agenda;
        }catch(error){
            throw new Error ("Error ao Deletar a lista")
        }
    }


}

export default new agendaServices