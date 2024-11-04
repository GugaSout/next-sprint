"use client";

import React, { useState } from 'react';
import '@/estilos/cadastro.css';
import { useRouter } from 'next/navigation';
import { TipoPessoa } from '@/types';

export default function Cadastro() {

    const navigate = useRouter();

    const [step, setStep] = useState(1);  
    const [pessoa, setPessoa] = useState<TipoPessoa>({
        id: 0,
        nome: '',
        dataNascimento: '', 
        email: '',
        cpf: '',
        cnh: '',
        cep: '',
        endereco: '',
        senha: '',
        confirmaSenha: ''
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPessoa({
            ...pessoa,
            [e.target.name]: e.target.value
        });
    };

    const validarSenha = () => {
        if (pessoa.senha !== pessoa.confirmaSenha) {
            alert('As senhas não coincidem.');
            return false;
        } else {
            
            return true;
        }
    };

    // Função para lidar com o envio do formulário em cada etapa
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);  // Passa para a segunda etapa
            return;
        } else if (step === 2) {
            setStep(3);  // Passa para a última etapa
            return;
        } else if (step === 3 && validarSenha()) {
            const cabecalho = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pessoa)
            };
            try {
                const response = await fetch("http://localhost:3000/api/base-pessoas", cabecalho);
                if (response.ok) {
                    setPessoa({ id: 0, nome: '', dataNascimento: '', email: '', cpf: '', cnh: '', cep: '', endereco: '', senha: '', confirmaSenha: ''
                    });
                    navigate.push('/');
                } else {
                    alert("Erro ao cadastrar!");
                }
            } catch (error) {
                console.error("Erro ao cadastrar o produto", error);
            }
        }
    };

return (
    <main className="Maincad">
        <div className='div-wpp-carro'></div>
        <div className="Divcad">
            <h1>CARDOCTOR</h1>
            <form onSubmit={handleSubmit} className="FormCad">
                {/* Primeira Etapa */}
                {step === 1 && (
                    <div className="Cadastro">
                        <h2>Cadastro</h2>
                        <div className="divInput">
                            <label className='lblCad' htmlFor="nome">Nome Completo</label>
                            <input className="objCad" type="text" name="nome" required value={pessoa.nome} onChange={handleChange} />
                            <label className='lblCad' htmlFor="dataNascimento">Data de Nascimento</label>
                            <input className="objCad" type="date" name="dataNascimento" required value={pessoa.dataNascimento} onChange={handleChange} />
                            <label className='lblCad' htmlFor="email">Email</label>
                            <input className="objCad" type="email" name="email" required value={pessoa.email} onChange={handleChange} />
                            <button className="btnCad" type="submit">PRÓXIMO</button>
                        </div>
                    </div>
                )}
                {/* Segunda Etapa */}
                {step === 2 && (
                    <div className="Cadastro">
                        <h2>Cadastro</h2>
                        <div className="divInput">
                            <label className='lblCad' htmlFor="cpf">CPF</label>
                            <input className="objCad" type="text" name="cpf" required value={pessoa.cpf} onChange={handleChange} />
                            <label className='lblCad' htmlFor="cnh">CNH</label>
                            <input className="objCad" type="text" name="cnh" required value={pessoa.cnh} onChange={handleChange} />
                            <label className='lblCad' htmlFor="cep">CEP</label>
                            <input className="objCad" type="text" name="cep" required value={pessoa.cep} onChange={handleChange} />
                            <label className='lblCad' htmlFor="endereco">Endereço</label>
                            <input className="objCad" type="text" name="endereco" required value={pessoa.endereco} onChange={handleChange} />
                            <button className="btnCad" type="submit">PRÓXIMO</button>
                        </div>
                    </div>
                )}
                {/* Terceira Etapa */}
                {step === 3 && (
                    <div className="Cadastro">
                        <h2>Cadastro</h2>
                        <div className="divInputSenha">
                            <label className='lblCad' htmlFor="senha">Senha</label>
                            <input className="objCad" type="password" name="senha" required value={pessoa.senha} onChange={handleChange} />
                            <label className='lblCad' htmlFor="confirmaSenha">Confirmar Senha</label>
                            <input className="objCad" type="password" name="confirmaSenha" required value={pessoa.confirmaSenha} onChange={handleChange} />
                            <button className="btnCad" type="submit">Finalizar Cadastro</button>
                        </div>
                    </div>
                )}
                <div className="icones_redes_cad">
                    <a href="https://www.instagram.com/porto/" target="_blank" rel="noreferrer">
                        <img className="redes_cad" src="insta.png" alt="Instagram" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="redes_cad" src="phone.png" alt="Contato porto" />
                    </a>
                    <a href="https://www.portoseguro.com.br" target="_blank" rel="noreferrer">
                        <img className="redes_cad" src="web.png" alt="Site Porto" />
                    </a>
                </div>
            </form>
        </div>
    </main>
);
};
