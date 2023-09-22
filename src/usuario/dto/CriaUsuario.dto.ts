import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validator/email.validator";

export class CriaUsuarioDTO{

    @IsNotEmpty({message: "O nome não pode estar vazio"})
    nome:string;

    @IsEmail()
    @EmailUnico({message: "Já existe um usuario com esse email"})
    email:string;//"SSJFSBAJHASBJFHASB@OUTLOOK.com"

    @MinLength(6)
    senha:string;
}