import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function POST(request: Request) {
    const { nusuario, senha } = await request.json();

    // Carrega o arquivo JSON com os dados dos usuários
    const file = await fs.readFile(process.cwd() + '/src/data/pessoas.json', 'utf-8');
    const data = JSON.parse(file);

    // Verifica se o usuário existe e se a senha está correta
    const usuarioEncontrado = data.find((pessoa: any) => pessoa.nome === nusuario && pessoa.senha === senha);

    if (usuarioEncontrado) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false }, { status: 401 });
    }
}