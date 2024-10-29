"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function Header() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push("/login")
  }

  return (
    <header className="bg-blue-500 px-10 flex justify-between items-center text-white h-[10vh] shadow-custom-shadow">
      <div className="text-2xl font-bold">CarDoctor</div>
      <nav className="flex space-x-6">
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
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white border border-transparent hover:border-white transition duration-500"
        onClick={handleLoginClick}
      >
        Fazer login
      </button>
    </header>
  )
}
