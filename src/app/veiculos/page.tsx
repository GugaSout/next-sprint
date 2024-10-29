"use client"
import Header from "@/components/Header/Header"
import React, { useState } from "react"
import "@/estilos/veiculos.css"
import Link from "next/link"

interface Veiculo {
  modelo: string
  ano: string
  placa: string
  quilometragem: string
  tipo: string
}

export default function Veiculos() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full bg-gradient-to-b">
        <div className="w-full flex my-10 mx-20 justify-between">
          <div className="relative bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/moto.png')] bg-cover bg-[80%_20%]"></div>
            <Link href="/motos">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/carro.png')] bg-cover bg-[center_bottom]"></div>
            <Link href="/carros">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/caminhao.png')] bg-cover bg-[70%_30%]"></div>
            <Link href="/caminhoes">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
