"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginClick = () => {
    router.push("/login")
  }

  return (
    <header className="bg-blue-500 px-4 py-4 md:px-10 flex flex-col md:flex-row justify-between items-center h-auto text-white shadow-lg">
      <div className="text-lg md:text-2xl font-bold">CarDoctor</div>

      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-6">
        <Link
          href="/"
          className="relative group transition-colors duration-300 hover:text-white"
        >
          Home
          <span className="absolute left-0 top-full w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/veiculos"
          className="relative group transition-colors duration-300 hover:text-white"
        >
          Veiculos
          <span className="absolute left-0 top-full w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/sobre"
          className="relative group transition-colors duration-300 hover:text-white"
        >
          Sobre
          <span className="absolute left-0 top-full w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/feedbacks"
          className="relative group transition-colors duration-300 hover:text-white"
        >
          Feedbacks
          <span className="absolute left-0 top-full w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>

      {isLoggedIn ? (
        <Link
          href="/perfil"
          className="bg-white text-blue-500 w-10 h-10 flex items-center justify-center rounded-full transition duration-500 hover:bg-blue-500 hover:text-white border border-transparent hover:border-white"
        >
          👁️
        </Link>
      ) : (
        <button
          className="bg-white text-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white border border-transparent hover:border-white transition duration-500 text-sm md:text-base"
          onClick={handleLoginClick}
        >
          Fazer login
        </button>
      )}
    </header>
  )
}
