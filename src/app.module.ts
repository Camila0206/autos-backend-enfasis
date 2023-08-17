import { Module } from '@nestjs/common';
import { AutosModule } from './autos/autos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AutoSchema } from './autos/schemas/auto.schema';
import { UsuarioSchema } from './usuarios/schemas/usuario.schema';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'Usuarios', schema: UsuarioSchema },
      { name: 'Autos', schema: AutoSchema },
    ]),
    UsuariosModule,
    AutosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
