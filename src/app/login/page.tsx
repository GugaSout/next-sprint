"use client"

import Input from "@/components/Input/Input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { getUserIdByCredentials } from "@/services/authService"
import Link from "next/link"

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    DS_SENHA: "",
    DS_USUARIO: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async () => {
    const userId = await getUserIdByCredentials(
      formData.DS_USUARIO,
      formData.DS_SENHA
    )
    if (userId) {
      localStorage.setItem("ID_USUARIO", userId.toString())
      router.push("/")
    } else {
      setError("Credenciais inválidas")
    }
  }

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Área da imagem de fundo */}
      <div className="hidden lg:block lg:w-2/3 bg-[url('/wallpaper_carro_paisagem.jpg')] bg-cover bg-left h-100%"></div>

      {/* Área de login */}
      <div className="lg:w-1/3 w-full flex flex-col justify-evenly p-8 bg-white h-100% ">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">
            CarDoctor
          </h1>
        </div>
        <div className="w-full max-w-md mx-auto space-y-4">
          <Input
            label="Nome de Usuário"
            name="DS_USUARIO"
            type="text"
            value={formData.DS_USUARIO}
            onChange={handleChange}
            placeholder="Insira seu nome de usuário"
          />
          <Input
            label="Senha"
            name="DS_SENHA"
            type="password"
            value={formData.DS_SENHA}
            onChange={handleChange}
            placeholder="Insira sua senha"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg transition hover:bg-white hover:text-blue-600 border border-blue-600"
            onClick={handleLogin}
          >
            Entrar
          </button>

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
