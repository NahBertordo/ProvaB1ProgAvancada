import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Paciente{
    
    constructor(){}

    async criarPaciente(crPaciente: any){
        try{
            const paciente = await prisma.paciente.create({
                data:{
                    nomePcnte: crPaciente.nomePcnte,
                    senha: crPaciente.senha,
                    usuario: crPaciente.usuario
                }
            });
            return paciente;
        }catch(error){
            console.log(error);
            throw new Error ("Error ao criar pacientes")
        }
    }

    async listarPaciente(){
        try {
            const paciente = await prisma.paciente.findMany()
            return paciente;
        }catch (error){
            throw new Error ("Error ao listar pacientes")
        }
    }

    async updatePaciente(id: number, upPaciente: any){
        try{
            const paciente = await prisma.paciente.update({
                where: {id: id},
                data: upPaciente
            });
            return paciente;
        }catch(error){
            throw new Error ("Error ao Atualizar")
        }
    }

    async deletarPaciente(id: number){
        try {
            const paciente = await prisma.paciente.delete({
                where: {id: id}
            });
            return paciente;
        }catch(error){
            throw new Error ("Error ao Deletar a lsita")
        }
    }
}

export default new Paciente