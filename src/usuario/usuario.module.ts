import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { Email } from './validator/email.validator';

@Module({
    controllers: [UsuarioController],
    providers:[UsuarioRepository,Email]
})
export class UsuarioModule {}
