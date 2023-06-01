import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditaTextoDTO {


    @IsNotEmpty({ message: 'Não é possível deixar este campo vazio.'})
    @IsOptional()
    titulo: string;
    subtitulo: string;
    conteudo: string;
    tag: string; 
    data: string;
 

}