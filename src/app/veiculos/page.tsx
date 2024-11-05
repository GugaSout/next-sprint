"use client"
import Header from "@/components/Header/Header"
import React, { useState } from "react"
import Link from "next/link"


export default function Veiculos() {
  return (
    <>
      <main className="flex h-screen w-full bg-gradient-to-b justify-center flex-col">
        <Header />
        <div className="grid grid-cols-1 h-screen md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 py-5 w-full">
          <div className="relative bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="w-full h-full bg-[url('/moto.png')] bg-cover bg-[80%_20%]"></div>
            <Link href="/veiculos/motos">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Motos</h2>
              <p className="text-sm">Veja as suas motos cadastradas!</p>
            </div>
          </div>
          <div className="relative bg-center bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="w-full h-full bg-[url('/carro.png')] bg-cover bg-[center_bottom]"></div>
            <Link href="/veiculos/carros">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Carros</h2>
              <p className="text-sm">Veja as seus carros cadastrados!</p>
            </div>
          </div>
          <div className="relative bg-center bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="w-full h-full bg-[url('/caminhao.png')] bg-cover bg-[70%_30%]"></div>
            <Link href="/veiculos/caminhoes">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Caminhoes</h2>
              <p className="text-sm">Veja as seus caminhoes cadastrados!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
