"use client";

import React, { useState } from 'react';
import '@/estilos/cadastro.css'; 
import { useRouter } from 'next/navigation';

export default function Cadastro() {

    const router = useRouter();

    const [step, setStep] = useState(1);  // Controla a etapa do formulário
    const [formData, setFormData] = useState({
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

    // Função para lidar com mudanças nos inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Função para validar a senha na última etapa
    const validarSenha = () => {
        if (formData.senha !== formData.confirmaSenha) {
            alert('As senhas não coincidem.');
            return false;
        } else {
            alert('Registrado com sucesso!');
            return true;
        }
    };

    // Função para lidar com o envio do formulário em cada etapa
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);  // Passa para a segunda etapa
        } else if (step === 2) {
            setStep(3);  // Passa para a última etapa
        } else if (step === 3 && validarSenha()) {
            // Aqui, você pode fazer a submissão final ou redirecionar o usuário
            console.log('Formulário enviado com sucesso:', formData);
            router.push('/'); 
            // Redirecionar ou exibir mensagem de sucesso
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
                                <input className="objCad" type="text" name="nome" required  value={formData.nome} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="dataNascimento">Data de Nascimento</label>
                                <input className="objCad" type="date" name="dataNascimento" required  value={formData.dataNascimento} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="email">Email</label>
                                <input className="objCad" type="email" name="email" required  value={formData.email} onChange={handleChange}/>
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
                                <input className="objCad" type="text" name="cpf" required value={formData.cpf} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="cnh">CNH</label>
                                <input className="objCad" type="text" name="cnh" required value={formData.cnh} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="cep">CEP</label>
                                <input className="objCad" type="text" name="cep" required value={formData.cep} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="endereco">Endereço</label>
                                <input className="objCad" type="text" name="endereco" required value={formData.endereco} onChange={handleChange}/>
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
                                <input className="objCad" type="password" name="senha" required value={formData.senha} onChange={handleChange}/>
                                <label className='lblCad' htmlFor="confirmaSenha">Confirmar Senha</label>
                                <input className="objCad" type="password" name="confirmaSenha" required value={formData.confirmaSenha} onChange={handleChange}/>
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
}
