import Header from '@/components/header'
import '@/estilos/sobre.css'

export default function Sobre(){
    
   
    return(
        <>
        <Header/>
        <main className="main_sobre">
            <div className='div-Sobre'>
                <div className='dsec-sobre'>
                <section className='sec-sobre'>
                    <h1>CarDoctor</h1>
                </section>
                </div>
            </div>
            <footer className='footer_Sobre'>
                <div className='participantes'>
                    <div className='gusta'>
                        <img src="shrek 3.png" alt="" />
                        <p>Gustavo Souto </p>
                        <p><img src="git_icon.png" alt="" />RM558595</p>
                    </div>
                    <div className='miche'>
                        <img src="shrek 2.png" alt="" />
                        <p>Michele Souza</p>
                        <p><img src="git_icon.png" alt="" />RM558596</p>
                    </div>
                    <div className='luiza'>
                        <img src="shrek 4.png" alt="" />
                        <p>Luiza Danielle</p>
                        <p><img src="git_icon.png" alt="" />RM558597</p>
                    </div>
                </div>
            </footer>
        </main>
        </>
    )
}