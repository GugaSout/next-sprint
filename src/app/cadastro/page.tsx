"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/components/Input/Input"

export default function Cadastro() {
  const router = useRouter()

  const [step, setStep] = useState(1) // Controla a etapa do formulário
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    email: "",
    cpf: "",
    cnh: "",
    cep: "",
    senha: "",
    confirmaSenha: "",
    estado: "",
    cidade: "",
    bairro: "",
    ddd: "",
    ddi: "",
    numero: "",
    nomeUsuario: "",
  })

  // Função para lidar com mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Função para validar a senha na última etapa
  const validarSenha = () => {
    if (formData.senha !== formData.confirmaSenha) {
      alert("As senhas não coincidem.")
      return false
    } else {
      alert("Registrado com sucesso!")
      return true
    }
  }

  // Função para lidar com o envio do formulário em cada etapa
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      setStep(4)
    } else if (step === 4 && validarSenha()) {
      console.log("Formulário enviado com sucesso:", formData)
      router.push("/")
    }
  }
  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Área da imagem de fundo */}
      <div className="hidden lg:block lg:w-2/3 bg-[url('/wallpaper_carro_paisagem.jpg')] bg-cover bg-left h-100%"></div>

      {/* Área de login */}
      <div className="lg:w-1/3 w-full flex flex-col justify-between p-8 bg-white h-full">
        {/* Título CarDoctor posicionado no topo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">
            CarDoctor
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
          {/* Primeira Etapa */}
          {step === 1 && (
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-blue-800 flex justify-center text-white font-bold">
                  1
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              </div>
              <Input
                label="Nome Completo"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Insira seu nome completo"
              />
              <Input
                label="Data de Nascimento"
                name="dataNascimento"
                type="date"
                value={formData.dataNascimento}
                onChange={handleChange}
                placeholder=""
              />
              <Input
                label="CNH - Habilitacao"
                name="cnh"
                type="number"
                value={formData.cnh}
                onChange={handleChange}
                placeholder="Insira sua CNH"
              />
              <Input
                label="CPF"
                name="cpf"
                type="text"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="123.456.789-09"
              />
              <button
                className="btnCad w-full py-3 bg-blue-600 text-white font-bold rounded-lg transition hover:bg-white hover:text-blue-600 border border-blue-600"
                type="submit"
              >
                PRÓXIMO
              </button>
            </div>
          )}

          {/* Segunda Etapa */}
          {step === 2 && (
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-blue-800 flex justify-center text-white font-bold">
                  2
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              </div>
              <label
                className="block font-bold text-left text-lg mb-2 w-full"
                htmlFor="estado"
              >
                Estado
              </label>
              <select
                className="p-3 mb-6 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="estado"
              >
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              <Input
                label="CEP"
                name="cep"
                type="text"
                value={formData.cep}
                onChange={handleChange}
                placeholder="00000-000"
              />
              <Input
                label="Bairro"
                name="bairro"
                type="text"
                value={formData.bairro}
                onChange={handleChange}
                placeholder="Insira seu bairro"
              />
              <Input
                label="Cidade"
                name="cidade"
                type="text"
                value={formData.cidade}
                onChange={handleChange}
                placeholder="Insira sua cidade"
              />
              <div className="flex w-full justify-center space-x-[70px]">
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="button"
                  onClick={handleBack}
                >
                  VOLTAR
                </button>
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="submit"
                >
                  PRÓXIMO
                </button>
              </div>
            </div>
          )}

          {/* Terceira Etapa */}
          {step === 3 && (
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-blue-800 flex justify-center text-white font-bold">
                  3
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              </div>
              <Input
                label="DDD"
                name="ddd"
                type="number"
                value={formData.ddd}
                onChange={handleChange}
                placeholder="Insira seu DDD"
              />
              <Input
                label="DDI"
                name="ddi"
                type="number"
                value={formData.ddi}
                onChange={handleChange}
                placeholder="Insira seu DDI"
              />
              <Input
                label="Número"
                name="numero"
                type="text"
                value={formData.numero}
                onChange={handleChange}
                placeholder="00000-0000"
              />
              <div className="flex w-full justify-center space-x-[70px] ">
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="button"
                  onClick={handleBack}
                >
                  VOLTAR
                </button>
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="submit"
                >
                  PRÓXIMO
                </button>
              </div>
            </div>
          )}
          {/* Quarta Etapa */}
          {step === 4 && (
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-blue-800 flex justify-center text-white font-bold">
                  4
                </div>
              </div>
              <Input
                label="Senha"
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Insira uma senha"
              />
              <Input
                label="Confirmar Senha"
                name="confirmaSenha"
                type="password"
                value={formData.confirmaSenha}
                onChange={handleChange}
                placeholder="Confirme a sua senha"
              />
              <Input
                label="Nome de Usuario"
                name="nomeUsuario"
                type="text"
                value={formData.nomeUsuario}
                onChange={handleChange}
                placeholder="Insira um nome de usuario"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insira seu email"
              />
              <div className="flex w-full justify-center space-x-[70px] ">
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="button"
                  onClick={handleBack}
                >
                  VOLTAR
                </button>
                <button
                  className="btnCad w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
                  type="submit"
                >
                  FINALIZAR CADASTRO
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  )
}
