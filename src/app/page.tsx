"use client"
import { useEffect } from "react"
import "@/estilos/home.css"

import Header from "@/components/Header/Header"

declare global {
  interface Window {
    watsonAssistantChatOptions: {
      integrationID: string
      region: string
      serviceInstanceID: string
      onLoad: (instance: WatsonAssistantInstance) => Promise<void>
      clientVersion?: string
    }
  }
}

interface WatsonAssistantInstance {
  render: () => Promise<void>
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.watsonAssistantChatOptions) return

      window.watsonAssistantChatOptions = {
        integrationID: "d410df2d-ab85-40d5-98e5-2e4a60274a5d",
        region: "us-south",
        serviceInstanceID: "198a297c-9be0-4faa-a3c1-a4a3ccd3f138",
        onLoad: async (instance: WatsonAssistantInstance) => {
          await instance.render()
        },
      }

      const script = document.createElement("script")
      script.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js"

      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-white py-10">
        <section className="flex flex-col md:flex-row w-full justify-between items-center px-5 md:px-10">
          <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              Car Doctor
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              Saiba tudo sobre a saúde do seu carro com o CarDoctor.
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              className="w-4/5 md:w-1/2 lg:w-[50vw]"
              src="carro_azul.png"
              alt="Carro Azul"
            />
          </div>
        </section>
      </div>
    </>
  )

}
