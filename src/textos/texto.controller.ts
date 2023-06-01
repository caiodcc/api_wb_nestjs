import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TextosRepository } from "./texto.repository";
import { CriaTextoDTO } from "./dto/CriaTexto.dto";
import { TextoEntity } from "./texto.entity";
import { v4 as uuid } from 'uuid'; 
import { ListaTextoDTO } from "./dto/ListaTexto.dto";
import { EditaTextoDTO } from "./dto/EditaTexto.dto";

@Controller('/textos')
export class TextoController { 

        constructor(private textoRepository: TextosRepository) {

        }
        @Post()
        async criaTexto(@Body() dadosDoTexto: CriaTextoDTO) {
            
            let textoEntity = new TextoEntity();
            textoEntity.titulo = dadosDoTexto.titulo;
            textoEntity.subtitulo = dadosDoTexto.subtitulo;
            textoEntity.conteudo = dadosDoTexto.conteudo;
            textoEntity.data = dadosDoTexto.data;
            textoEntity.tag = dadosDoTexto.tag;
            textoEntity.id = uuid();


            this.textoRepository.salvar(textoEntity)
            return { id: textoEntity.id, message: 'Texto criado com sucesso! :)'}
        }

        @Get()
        async listaTexto() {
            const textosSalvos = await this.textoRepository.listar();
            const textoLista = textosSalvos.map (
                texto => new ListaTextoDTO(
                    texto.id,
                    texto.titulo
                )
            );
            return textoLista

        }
        @Put('/:id')
        async editaTexto(@Param('id') id: string, @Body() novosDados: EditaTextoDTO){
           const textoEditado = await this.textoRepository.edita(id, novosDados);

           return {
            texto: textoEditado,
            message: 'Texto atualizado!'
           }

        }
        @Delete('/:id')
        async removeTexto(@Param('id') id:string){
            const textoRemovido = await this.textoRepository.remove(id);

            return {
                texto: textoRemovido,
                message: 'Texto removido com sucesso'
            }


        }
    }