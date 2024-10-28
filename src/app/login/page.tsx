"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    router.push("/")
  }

  return (
    <main className="flex min-h-screen w-full">
      {/* Área da imagem de fundo */}
      <div className="h-screen w-2/3 bg-[url('/wallpaper_carro_paisagem.jpg')] bg-left bg-cover"></div>

      {/* Área de login */}
      <div className="w-1/3 flex flex-col justify-between p-8 bg-white">
        {/* Título CarDoctor posicionado no topo */}
        <div className="w-full flex justify-center">
          <h1 className="text-5xl font-bold text-blue-600">CarDoctor</h1>
        </div>

        {/* Formulário de login centralizado */}
        <div className="w-full max-w-md flex flex-col items-center">
          <label
            className="block font-bold text-left text-lg mb-2 w-full"
            htmlFor="nusuario"
          >
            Nome de Usuário
          </label>
          <input
            className="p-3 mb-6 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="nusuario"
            type="text"
            placeholder="Insira seu nome de usuário"
          />

          <label
            className="block font-bold text-left text-lg mb-2 w-full"
            htmlFor="senha"
          >
            Senha
          </label>
          <input
            className="p-3 mb-6 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="senha"
            type="password"
            placeholder="Insira sua senha"
          />

          {/* Botão de Login */}
          <button
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:border border-blue-500 hover:border-solid"
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

        {/* Redes Sociais posicionadas no final */}
        <div className="w-full flex justify-center items-center mt-8 space-x-4">
          <a
            href="https://www.instagram.com/porto/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8 h-8" src="/insta.png" alt="Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8 h-8" src="/phone.png" alt="Contato WhatsApp" />
          </a>
          <a
            href="https://www.portoseguro.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8 h-8" src="/web.png" alt="Site Porto Seguro" />
          </a>
        </div>
      </div>
    </main>
  )
}
