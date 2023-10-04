import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaServices{

    constructor(){}

    async criarSecretaria(crSecretaria: any){
        try{
            const secretaria = await prisma.secretaria.create({
                data:{
                    id: crSecretaria.id,
                    nome: crSecretaria.nome,
                    RG: crSecretaria.RG,
                }
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao criar secretarias")
        }
    }

    async listarSecretarias() {
        try {
          const secretarias = await prisma.secretaria.findMany();
          return secretarias;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao listar secretarias");
        }
      }

    async updateSecretarias(id: number, upSecretaria: any){
        try{
            const secretaria = await prisma.secretaria.update({
                where: {id: id},
                data: upSecretaria
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao Atualizar")
        }
    }

    async deletarSecretarias(id: number){
        try {
            const secretaria = await prisma.secretaria.delete({
                where: {id: id}
            });
            return secretaria;
        }catch(error){
            console.log(error);
            throw new Error ("Error ao Deletar a lista")
        }
    }
}

export default new secretariaServices