import { IsNotEmpty, IsString } from "class-validator";

export class CriaTextoDTO {


    @IsNotEmpty({ message: 'Não é possível deixar este campo vazio.'})
    titulo: string;
    subtitulo?: string;
    conteudo: string;
    tag: string; 
    data: string;
 

}