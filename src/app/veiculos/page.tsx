"use client"
import Header from "@/components/Header/Header"
import React, { useState } from "react"
import "@/estilos/veiculos.css"

interface Veiculo {
  modelo: string
  ano: string
  placa: string
  quilometragem: string
  tipo: string
}

export default function Veiculos() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [veiculo, setVeiculo] = useState<Veiculo>({
    modelo: "",
    ano: "",
    placa: "",
    quilometragem: "",
    tipo: "",
  })

  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showForm, setShowForm] = useState<boolean>(true)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setVeiculo((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditing && editIndex !== null) {
      const updatedVehicles = veiculos.map((v, index) =>
        index === editIndex ? veiculo : v
      )
      setVeiculos(updatedVehicles)
      setIsEditing(false)
      setEditIndex(null)
    } else {
      setVeiculos((prevVehicles) => [...prevVehicles, veiculo])
    }

    setVeiculo({ modelo: "", ano: "", placa: "", quilometragem: "", tipo: "" })
  }

  const handleEdit = (index: number) => {
    const vehicleToEdit = veiculos[index]
    setVeiculo(vehicleToEdit)
    setIsEditing(true)
    setEditIndex(index)
    setShowForm(true)
  }

  return (
    <>
      <Header />
      <div className="div-veiculos">
        {veiculos.length > 0 && (
          <div className="div-veiculoscad">
            <h2>Veículos Cadastrados:</h2>
            {veiculos.map((v, index) => (
              <div key={index} className="veiculo">
                <p>
                  <strong>Modelo:</strong> {v.modelo}
                </p>
                <p>
                  <strong>Ano:</strong> {v.ano}
                </p>
                <p>
                  <strong>Placa:</strong> {v.placa}
                </p>
                <p>
                  <strong>Quilometragem:</strong> {v.quilometragem}
                </p>
                <p>
                  <strong>Tipo:</strong> {v.tipo}
                </p>
                <button
                  onClick={() => handleEdit(index)}
                  className="btn-alt-Veiculo"
                >
                  <img src="lapis.png" alt="lapis" />
                </button>
              </div>
            ))}
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="div-form">
              <h1>{isEditing ? "Editar Veículo" : "Cadastrar Veículo"}</h1>
              <input
                type="text"
                name="modelo"
                value={veiculo.modelo}
                onChange={handleChange}
                placeholder="Modelo"
                required
              />

              <input
                type="text"
                name="ano"
                value={veiculo.ano}
                onChange={handleChange}
                placeholder="Ano"
                required
              />

              <input
                type="text"
                name="placa"
                value={veiculo.placa}
                onChange={handleChange}
                placeholder="Placa"
                required
              />

              <input
                type="text"
                name="quilometragem"
                value={veiculo.quilometragem}
                onChange={handleChange}
                placeholder="Quilometragem"
                required
              />

              <select
                name="tipo"
                value={veiculo.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um tipo</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="caminhão">Caminhão</option>
              </select>

              <button type="submit" className="btn-Veiculo">
                {isEditing ? "Salvar Alterações" : "Cadastrar Veículo"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
