"use client"
import Header from "@/components/Header/Header"
import React, { useState } from "react"
import "@/estilos/veiculos.css"
import Link from "next/link"
import Image from "next/image"


export default function Feedbacks() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full bg-gradient-to-b flex-col items-center">
        <div className="mt-10 mx-10">
          <div className="bg-azul-escuro bg-opacity-30 text-azul-escuro rounded-3xl flex justify-around p-7 w-[160vh]">
            <Image
              src="/aviso.png"
              alt="Icone de aviso"
              width={50}
              height={50}
            />
            <p className="w-[130vh]">
              Os dados coletados a partir desta pesquisa de satisfação serão
              utilizados exclusivamente para aprimorar os serviços oferecidos
              pela Cardoctor. Sua opinião é essencial para nós!
            </p>
          </div>
        </div>
        <div className="flex m-10 justify-between flex-grow">
          <div className="relative bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/manutencao.png')] bg-cover bg-center"></div>
            <Link href="/motos">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/auto-diagnostico.png')] bg-cover bg-[center_bottom]"></div>
            <Link href="/carros">
              <span className="absolute inset-0"></span>
              {/* Placeholder para o Link */}
            </Link>
          </div>
          <div className="relative bg-center bg-cover w-[50vh] m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all">
            <div className="absolute inset-0 bg-[url('/oficina.png')] bg-cover bg-[70%_30%]"></div>
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
