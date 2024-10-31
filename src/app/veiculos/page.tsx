"use client"
import Header from "@/components/Header/Header"
import React, { useState } from "react"
import "@/estilos/veiculos.css"
import Link from "next/link"


export default function Veiculos() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full bg-gradient-to-b justify-center">
        <div className="grid grid-cols-1 h-[100vh] md:grid-cols-2  lg:grid-cols-3 gap-5 mx-5 lg:mx-20 my-1 w-full">
          <div className="relative bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1">
            <div className="w-full h-full bg-[url('/moto.png')] bg-cover bg-[80%_20%]"></div>
            <Link href="/veiculos/motos">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1">
            <div className="aw-full h-full bg-[url('/carro.png')] bg-cover bg-[center_bottom]"></div>
            <Link href="/veiculos/carros">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1">
            <div className="w-full h-full bg-[url('/caminhao.png')] bg-cover bg-[70%_30%]"></div>
            <Link href="/veiculos/caminhoes">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
