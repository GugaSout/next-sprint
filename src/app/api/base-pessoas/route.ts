import { TipoPessoa } from "@/types";
import { promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    try{

        const file = await fs.readFile(process.cwd() + '/src/data/pessoas.json','utf-8')
        const data = JSON.parse(file)
        const {id, nome, dataNascimento, email, cpf, cnh, cep, endereco, senha, confirmaSenha} = await request.json()
        const pessoa = {id, nome, dataNascimento, email, cpf, cnh, cep, endereco, senha, confirmaSenha} as TipoPessoa
        pessoa.id = Number(Date.now())
        data.push(pessoa)
        const json = JSON.stringify(data)
        await fs.writeFile(process.cwd() + '/src/data/pessoas.json', json)

return NextResponse.json(pessoa)
}catch(error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json({ error: "Erro ao cadastrar a pessoa" }, { status: 500 });
}
}

