"use client"

import Input from "@/components/Input/Input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    router.push("/")
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const [formData, setFormData] = useState({
    nomeUsuario: "",
    senha: "",
  })
  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Área da imagem de fundo */}
      <div className="hidden lg:block lg:w-2/3 bg-[url('/wallpaper_carro_paisagem.jpg')] bg-cover bg-left h-100%"></div>

      {/* Área de login */}
      <div className="lg:w-1/3 w-full flex flex-col justify-evenly p-8 bg-white h-100% ">
        {/* Título CarDoctor posicionado no topo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">
            CarDoctor
          </h1>
        </div>
        {/* Formulário de login centralizado */}
        <div className="w-full max-w-md mx-auto space-y-4">
          <Input
            label="Nome de Usuário"
            name="nusuario"
            type="text"
            value={formData.nomeUsuario}
            onChange={handleChange}
            placeholder="Insira seu nome de usuário"
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Insira sua senha"
          />

          {/* Botão de Login */}
          <button
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg transition hover:bg-white hover:text-blue-600 border border-blue-600"
            onClick={handleLogin}
          >
            Entrar
          </button>
    
          {/* Link para cadastro */}
          <Link
            href="/cadastro"
            className="block text-center text-blue-600 font-bold mt-6"
          >
            Não Possuo Login
          </Link>
        </div>
      </div>
    </main>
  )
}
