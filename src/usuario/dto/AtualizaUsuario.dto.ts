import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailUnico } from "../validator/email.validator";

export class AtualizaUsuarioDTO{

    @IsNotEmpty({message: "O nome não pode estar vazio"})
    @IsOptional()
    nome:string;

    @IsEmail()
    @EmailUnico({message: "Já existe um usuario com esse email"})
    @IsOptional()
    email:string;//"SSJFSBAJHASBJFHASB@OUTLOOK.com"

    @MinLength(6)
    @IsOptional()
    senha:string;
}