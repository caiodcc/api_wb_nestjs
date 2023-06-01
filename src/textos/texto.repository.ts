import { Injectable } from "@nestjs/common";
import { TextoEntity } from "./texto.entity";
import { text } from "stream/consumers";

@Injectable()

export class TextosRepository {
    private textos: TextoEntity[] = [];

    async salvar(textos) {
        this.textos.push(textos);
 
    }

    async listar() {
        return this.textos
    }
    private buscaPorId(id: string){


    const possivelTexto = this.textos.find( textoSalvo => textoSalvo.id === id );

        if(!possivelTexto){
            throw new Error('Texto não existente.')

            return possivelTexto;
        }
    }
    async edita(id: string, dadosEditados: Partial<TextoEntity>){
        const texto = this.buscaPorId(id)
        Object.entries(dadosEditados).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }
            texto[chave] = valor;
        });
        return texto;
    }

    async remove(id:string){
        const texto = this.buscaPorId(id);

        this.textos = this.textos.filter(
            textoSalvo => textoSalvo.id !== id
        );
        
        return texto;
    }
}

   