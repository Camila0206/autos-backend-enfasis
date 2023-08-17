import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoSchema } from './schemas/auto.schema';
import { UsuarioSchema } from 'src/usuarios/schemas/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Autos', schema: AutoSchema },
      { name: 'Usuarios', schema: UsuarioSchema },
    ]),
  ],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
