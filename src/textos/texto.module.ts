import { Module } from "@nestjs/common";
import { TextoController } from "./texto.controller";
import { TextosRepository } from "./texto.repository";

@Module({
    controllers: [TextoController],
    providers: [TextosRepository]
})
export class TextoModule {

    
}