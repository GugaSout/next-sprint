"use client"
import Header from "@/components/Header/Header"
import Menu from "@/components/Menu/Menu"
import { Usuario, telefoneusuario, enderecousuario, usuario_endereco} from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function UserProfile() {
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    const storedUserId = localStorage.getItem("ID_USUARIO")
    if (storedUserId) {
      setUserId(parseInt(storedUserId))
    }
  }, [])

  const [usuario_endereco, setUsuario_endereco] = useState<usuario_endereco[]>([])
  const [enderecousuario, setEnderecousuario] = useState<enderecousuario[]>([])
  const [telefoneusuario, setTelefoneusuario] = useState<telefoneusuario[]>([])
  const [usuario, setUsuario] = useState<Usuario[]>([])
  const [idEndereco, setIdEndereco] = useState<number | null>(null)

  useEffect(() => {
    if (userId) {
      const chamadaApiJava = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/relacionamento_endereco/${userId}`
          )
          const data = await response.json()
          setUsuario_endereco(data)
          if (data.length > 0) {
            setIdEndereco(data[0].ID_ENDERECO)
          }
        } catch (error) {
          console.error("Erro ao buscar dados do relacionamento:", error)
        }
      }
      chamadaApiJava()
    }
  }, [userId])

    useEffect(() => {
      if (idEndereco) {
        const chamadaApiJavaEndereco = async () => {
          try {
            const response = await fetch(
              `http://localhost:8080/endereco/${idEndereco}`
            )
            const data = await response.json()
            setEnderecousuario(data)
          } catch (error) {
            console.error("Erro ao buscar dados do endereço:", error)
          }
        }
        chamadaApiJavaEndereco()
      }
    }, [idEndereco])

  useEffect(() => {
    if (userId) {
      const chamadaApiJava = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/usuario/${userId}`
          )
          const data = await response.json()
          setUsuario(data)
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error)
        }
      }
      chamadaApiJava()
    }
  }, [userId])

  useEffect(() => {
    if (userId) {
      const chamadaApiJava = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/telefone/${userId}`
          )
          const data = await response.json()
          setTelefoneusuario(data)
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error)
        }
      }
      chamadaApiJava()
    }
  }, [userId])

  // const handleAddTelefone = () => {
  //   if (telefoneusuario < 2) {
  //     setTelefoneusuario(telefones + 1)
  //     alert("Telefone adicionado!")
  //   }
  // }

  // const handleAddEndereco = () => {
  //   if (enderecos < 2) {
  //     setEnderecos(enderecos + 1)
  //     alert("Endereço adicionado!")
  //   }
  // }

  // const menuOptions = [
  //   // {
  //   //   name: "Adicionar Telefone",
  //   //   action: handleAddTelefone,
  //   //   disabled: telefones >= 2,
  //   // },
  //   // {
  //   //   name: "Adicionar Endereço",
  //   //   action: handleAddEndereco,
  //   //   disabled: enderecos >= 2,
  //   // },
  // ]
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
        <div className="relative w-full max-w-full md:max-w-md lg:max-w-4xl flex items-start bg-white rounded-lg shadow-lg md:-mt-24 lg:-mt-28 p-6 justify-around">
          <div className="flex items-center lg:flex-row md:flex-col xs:flex-col">
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
            <div className="ml-6 md:items-center flex lg:items-stretch md:flex-col xs:flex-col">
              {usuario.map((u) => (
                <div key={u.ID_USUARIO}>
                  <h2 className="text-2xl font-bold md:items-center">
                    {u.NM_USUARIO}, {u.NR_IDADE}
                  </h2>
                </div>
              ))}
              <div className="mt-2 text-gray-600 space-y-1 text-sm lg:text-left md:text-center">
                {usuario.map((u) => (
                  <div key={u.ID_USUARIO}>
                    <p>
                      {u.DT_NASCIMENTO} | {u.NR_CNH} | {u.NR_CPF}
                    </p>
                  </div>
                ))}
                <div className="flex space-x-4 mt-2">
                  {telefoneusuario.map((t) => (
                    <div key={t.ID_TELEFONE}>
                      <p>
                        {t.NR_TELEFONE_COMPLETO} ({t.TP_TELEFONE}) (
                        {t.ST_TELEFONE})
                      </p>
                    </div>
                  ))}
                </div>
                {enderecousuario.map((e) =>
                <div key={e.ID_ENDERECO}>
                  <p>
                    {e.NM_LOGRADOURO}, {e.DS_COMPLEMENTO}, {e.DS_PONTO_REFERENCIA} ({e.TP_ENDERECO})
                  </p>
                </div>
              )}
              </div>
            </div>
          </div>
          <div className="pt-4">
            {/* <Menu options={menuOptions} /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
