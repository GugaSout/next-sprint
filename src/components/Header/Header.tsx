"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "@/estilos/header.css"

export default function Header() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push("/login")
  }

  return (
    <header className="navbar">
      <div className="logo">CarDoctor</div>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/veiculos">Veiculos</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
      <button className="cta-button" onClick={handleLoginClick}>
        Fazer login
      </button>
    </header>
  )
}
