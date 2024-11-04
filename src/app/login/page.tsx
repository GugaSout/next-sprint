"use client";

import Link from 'next/link';
import "@/estilos/login.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [usuario, setUsuario] = useState({ nusuario: "", senha: "" });
    const [error, setError] = useState("");

    // Função para capturar os valores dos campos de entrada
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        setError("");  // Limpa mensagens de erro
        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        };
        
        try {
            const response = await fetch("/api/login", cabecalho);
            if (response.ok) {
                // Usuário autenticado com sucesso
                router.push('/');
            } else {
                // Usuário não encontrado ou senha incorreta
                setError("Nome de usuário ou senha incorretos.");
            }
        } catch (error) {
            console.error("Erro ao realizar login", error);
            setError("Erro ao realizar login. Tente novamente mais tarde.");
        }
    };

    return (
        <main className='Mainlog'>
            <div className='div-wpp-carro'></div>
            <div className="DivLogin">
                <h1>CARDOCTOR</h1>
                <div className="Login">
                    <h2>Login</h2>
                    <div className='Linput'>
                        <label className='lblLogin' htmlFor="nusuario">NOME DE USUÁRIO</label>
                        <input
                            className='inpLogin'
                            name='nusuario'
                            type="text"
                            value={usuario.nusuario}
                            onChange={handleChange}
                        />
                        <label className='lblLogin' htmlFor="senha">SENHA</label>
                        <input
                            className='inpLogin'
                            name='senha'
                            type="password"
                            value={usuario.senha}
                            onChange={handleChange}
                        />
                        {error && <p className="error">{error}</p>}
                        <button className='btnLog' onClick={handleLogin}>ENTRAR</button>
                        <Link href='/cadastro'>Não Possuo Login</Link>
                    </div>
                </div>
                <div className="icones_redes_log">
                    <a href="https://www.instagram.com/porto/" target="_blank" rel="noreferrer">
                        <img className="redes_log" src="/insta.png" alt="Instagram" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="redes_log" src="/phone.png" alt="Contato porto" />
                    </a>
                    <a href="https://www.portoseguro.com.br" target="_blank" rel="noreferrer">
                        <img className="redes_log" src="/web.png" alt="Site Porto" />
                    </a>
                </div>
            </div>
        </main>
    );
}
