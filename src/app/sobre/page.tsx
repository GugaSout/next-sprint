import Header from "@/components/Header/Header"
import "@/estilos/sobre.css"

export default function Sobre() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-around flex-grow">
        <div className="flex bg-blue-600 w-[60vw] h-[30vh] rounded-2xl my-8 items-center flex-col">
          <h1 className="text-3xl md:text-5xl text-white text-center m-8">
            CarDoctor
          </h1>
          <p>
            Texto sobre a CarDoctor
          </p>
        </div>
        <footer className="h-[20vh] flex justify-evenly w-full">
          <div className="flex flex-col items-center">
            <img
              className="w-16 md:w-20"
              src="shrek 3.png"
              alt="Foto de Gustavo"
            />
            <p className="text-center">Gustavo Souto</p>
            <p className="flex items-center">
              <img
                className="w-6 md:w-8 mr-2"
                src="git_icon.png"
                alt="GitHub Icon"
              />
              RM558595
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 md:w-20"
              src="shrek 2.png"
              alt="Foto de Michele"
            />
            <p className="text-center">Michele Souza</p>
            <p className="flex items-center">
              <img
                className="w-6 md:w-8 mr-2"
                src="git_icon.png"
                alt="GitHub Icon"
              />
              RM558596
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 md:w-20"
              src="shrek 4.png"
              alt="Foto de Luisa"
            />
            <p className="text-center">Luiza Danielle</p>
            <p className="flex items-center">
              <img
                className="w-6 md:w-8 mr-2"
                src="git_icon.png"
                alt="GitHub Icon"
              />
              RM558597
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
