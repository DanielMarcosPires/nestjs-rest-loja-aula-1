import {ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class Email implements ValidatorConstraintInterface{

    constructor(private usuarioRepository: UsuarioRepository){}

    async validate(value:any, validationArguments?:ValidationArguments): Promise<boolean>{
       const usuarioExiste = await this.usuarioRepository.existeComEmail(value);
       return !usuarioExiste;
    }
}

export const EmailUnico = (op:ValidationOptions)=>{
    return (obj: Object, propriedade: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName:propriedade,
            options:op,
            constraints:[],
            validator:EmailUnico
        });
    }
}