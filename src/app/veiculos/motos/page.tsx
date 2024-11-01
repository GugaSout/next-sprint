"use client"

import { TipoMoto } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GrEdit as Editar } from "react-icons/gr"
import { RiDeleteBin2Line as Excluir } from "react-icons/ri"

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([])

  const chamadaApi = async () => {
    const response = await fetch("/api/base-produtos")
    const data = await response.json()

    setProdutos(data)
  }

  useEffect(() => {
    chamadaApi()
  }, [])

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/base-produtos/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        alert("Produto excluído com sucesso.")
        chamadaApi()
      }
    } catch (error) {
      console.error("Falha ao remover o produto: ", error)
    }
  }

  return (
    <div>
      <h2>Produtos</h2>

      <table className="tabelaProd">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PRECO</th>
            <th>QTD</th>
            <th>EDITAR | EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
              <td>{p.qtd}</td>
              <td>
                <Link href={`/produtos/${p.id}`}>
                  <Editar className="inline text-3xl" />
                </Link>{" "}
                |
                <Link href="#" onClick={() => handleDelete(p.id)}>
                  {" "}
                  <Excluir className="inline text-3xl" />
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>Quantidade de produtos : {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
