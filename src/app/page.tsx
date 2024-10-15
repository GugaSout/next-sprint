"use client"

import { useEffect } from 'react';
import './estilos/home.css';
import './types';
import Header from './../components/header';

export default function Home() {
  useEffect(() => {

    window.watsonAssistantChatOptions = {
      integrationID: "d410df2d-ab85-40d5-98e5-2e4a60274a5d",
      region: "us-south",
      serviceInstanceID: "198a297c-9be0-4faa-a3c1-a4a3ccd3f138",
      onLoad: async (instance) => { await instance.render(); }
    };


    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    // Limpeza do efeito
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    
      <div className="Home">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Car Doctor</h1>
            <p>
              Saiba tudo sobre a saúde do seu carro com o CarDoctor.
            </p>
          </div>
          <div className="hero-image">
            <img className='carro' src="carro_azul.png" alt="Carro Azul" />
          </div>
        </section>
      </div>
    
  );
}
