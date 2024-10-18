"use client"

import Link from 'next/link';
import "@/estilos/login.css"
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        
        router.push('/'); 
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
                        <input className='inpLogin' name='nusuario' type="text"  />
                        <label className='lblLogin' htmlFor="senha">SENHA</label>
                        <input className='inpLogin' name='senha' type="password"/>
                        <button className='btnLog' onClick={handleLogin}>ENTRAR</button>
                        <Link href='/cadastro'>Não Possuo Login</Link>
                    </div>
                </div>
            <div className="icones_redes">
                <a href="https://www.instagram.com/porto/" target="_blank" rel="noreferrer">
                    <img className="redes" src="insta.png" alt="Instagram" />
                </a>
                <a
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="redes" src="phone.png" alt="Contato porto" />
                </a>
                <a href="https://www.portoseguro.com.br" target="_blank" rel="noreferrer">
                    <img className="redes" src="web.png" alt="Site Porto" />
                </a>
            </div>
            </div>
        </main>
    );
}
