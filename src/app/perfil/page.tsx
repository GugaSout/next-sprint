"use client"
import Header from "@/components/Header/Header"
import Menu from "@/components/Menu/Menu"
import { Usuario } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function UserProfile() {
  const [telefones, setTelefones] = useState(0)
  const [enderecos, setEnderecos] = useState(0)

  const [usuario, setUsuario] = useState<Usuario[]>([]);

  useEffect(() => {
    const chamadaApiJava = async ()=>{
      const response = await fetch("http://localhost:8080/usuario")
      const data = await response.json()
      setUsuario(data)
    }
    chamadaApiJava();
  },[])

  const handleAddTelefone = () => {
    if (telefones < 2) {
      setTelefones(telefones + 1)
      alert("Telefone adicionado!")
    }
  }

  const handleAddEndereco = () => {
    if (enderecos < 2) {
      setEnderecos(enderecos + 1)
      alert("Endereço adicionado!")
    }
  }

  const menuOptions = [
    {
      name: "Adicionar Telefone",
      action: handleAddTelefone,
      disabled: telefones >= 2,
    },
    {
      name: "Adicionar Endereço",
      action: handleAddEndereco,
      disabled: enderecos >= 2,
    },
  ]
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center w-full">
        {/* Seção de Cabeçalho com imagem de fundo */}
        <div className="relative w-full h-60 md:h-80 lg:h-96 xs:h-0">
          <Image
            src="/estrada.png"
            alt="Background"
            layout="fill"
            className="object-cover"
          />
        </div>
        {/* Avatar e Informações do Perfil */}
        <div className="relative w-full max-w-full md:max-w-md lg:max-w-4xl flex items-start bg-white rounded-lg shadow-lg md:-mt-24 lg:-mt-28 p-6 justify-around">
          <div>
            {usuario.map((u) => (
              <div key={u.ID_USUARIO}>
                <p>{u.NM_USUARIO}</p>
                <p>{u.NR_CPF}</p>
                <p>{u.NR_CNH}</p>
                <p>{u.DT_NASCIMENTO}</p>
                <p>{u.NR_IDADE}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center lg:flex-row md:flex-col xs:flex-col">
            {/* Avatar do Usuário */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden">
                <Image
                  src="/profile-picture.png"
                  alt="Avatar"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Informações do Usuário */}
            <div className="ml-6 md:items-center flex lg:items-stretch md:flex-col xs:flex-col">
              <h2 className="text-2xl font-bold md:items-center">
                Nome Completo, Idade
              </h2>
              <div className="mt-2 text-gray-600 space-y-1 text-sm lg:text-left md:text-center">
                <p>00/00/0000 | 00000000 | 123.456.789-09</p>
                <div className="flex space-x-4 mt-2">
                  <p>+55 11 952557191 (pessoal)</p>
                  <p>+55 11 952557191 (empresarial)</p>
                </div>
                <p>Logradouro, complemento, ponto de referência (pessoal)</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Menu options={menuOptions} />
          </div>
        </div>
      </div>
    </main>
  )
}
