import { Module } from '@nestjs/common';
import { TextoModule } from './textos/texto.module';



@Module({
  imports: [TextoModule],
})
export class AppModule {


}
