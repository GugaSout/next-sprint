"use client";

import React, { useState } from 'react';
import '@/estilos/cadastro.css'; 

export default function Cadastro() {
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
            // Redirecionar ou exibir mensagem de sucesso
        }
    };

    return (
        <main className="Maincad">
            <form onSubmit={handleSubmit} className="log">
                <div className="Divcad">
                    <h2>Cadastro</h2>

                    {/* Primeira Etapa */}
                    {step === 1 && (
                        <div className="Cadastro">
                            <input
                                className="objCad"
                                type="text"
                                name="nome"
                                required
                                placeholder="Nome Completo"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="date"
                                name="dataNascimento"
                                required
                                placeholder="Data de Nascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <button className="btnCad" type="submit">Próximo</button>
                        </div>
                    )}

                    {/* Segunda Etapa */}
                    {step === 2 && (
                        <div className="Cadastro">
                            <input
                                className="objCad"
                                type="text"
                                name="cpf"
                                required
                                placeholder="CPF"
                                value={formData.cpf}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="text"
                                name="cnh"
                                required
                                placeholder="CNH"
                                value={formData.cnh}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="text"
                                name="cep"
                                required
                                placeholder="CEP"
                                value={formData.cep}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="text"
                                name="endereco"
                                required
                                placeholder="Endereço"
                                value={formData.endereco}
                                onChange={handleChange}
                            />
                            <button className="btnCad" type="submit">Próximo</button>
                        </div>
                    )}

                    {/* Terceira Etapa */}
                    {step === 3 && (
                        <div className="Cadastro">
                            <input
                                className="objCad"
                                type="password"
                                name="senha"
                                required
                                placeholder="Senha"
                                value={formData.senha}
                                onChange={handleChange}
                            />
                            <input
                                className="objCad"
                                type="password"
                                name="confirmaSenha"
                                required
                                placeholder="Confirmar Senha"
                                value={formData.confirmaSenha}
                                onChange={handleChange}
                            />
                            <button className="btnCad" type="submit">Finalizar Cadastro</button>
                        </div>
                    )}
                </div>
            </form>
        </main>
    );
}
