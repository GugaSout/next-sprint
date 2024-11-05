"use client"
import Header from "@/components/Header/Header"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Feedbacks() {
  return (
    <>
      <main className="flex h-screen w-full bg-gradient-to-b flex-col">
        <Header />
        <div className="mt-10 mx-10 flex justify-center">
          <div className="bg-azul-escuro bg-opacity-30 text-blue-900 rounded-3xl flex flex-col lg:flex-row justify-around p-7 w-full items-center">
            <Image
              src="/aviso.png"
              alt="Icone de aviso"
              width={50}
              height={50}
            />
            <p className="ml-8 md:ml-0 xs:ml-0 text-justify 2xl:text-2xl/10">
              Os dados coletados a partir desta pesquisa de satisfação serão
              utilizados exclusivamente para aprimorar os serviços oferecidos
              pela Cardoctor. Sua opinião é essencial para nós!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 h-[70vh] gap-5 mx-5 md:grid-cols-2  lg:grid-cols-3 my-10 ">
          {/* Card 1 */}
          <div className="relative bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="w-full h-full bg-[url('/manutencao.png')] bg-cover bg-center"></div>
            <Link href="/motos">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Serviço de Manutenção</h2>
              <p className="text-sm">
                Conte-nos e avalie algum serviço de manutenção feito no seu
                veiculo, essas informações enriquecerão nosso serviço de auto
                diagnostico.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="absolute inset-0 bg-[url('/auto-diagnostico.png')] bg-cover bg-[center_bottom]"></div>
            <Link href="/carros">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Auto Diagnóstico</h2>
              <p className="text-sm">
                Conte-nos e avalie nosso serviço de auto diagnostico.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-cover m-5 rounded-2xl overflow-hidden hover:border-8 border-blue-800 opacity-80 hover:opacity-100 hover:m-0 transition-all w-1/1 group">
            <div className="absolute inset-0 bg-[url('/oficina.png')] bg-cover bg-[70%_30%]"></div>
            <Link href="/caminhoes">
              <span className="absolute inset-0"></span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900 bg-opacity-80 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h2 className="font-bold text-lg">Oficinas</h2>
              <p className="text-sm">
                Conte-nos sobre as oficinas que você já visitou e avalie sua
                experiência. Essas informações nos ajudarão a enriquecer nosso
                serviço de autodiagnóstico e a recomendar as melhores opções de
                oficinas personalizadas para você.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
