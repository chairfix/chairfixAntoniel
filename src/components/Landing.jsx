"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Star } from 'lucide-react'
import { useState } from "react"



function Landing() {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden">
      <a href="https://api.whatsapp.com/send?phone=34685572880&text=Hola" target="_blank">
          {/* <AiFillGithub className='gitHub'/> */}
          <img src="/whatsapp.png" className="btnFlotante" />
        </a>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Coluna da Esquerda - Texto Principal */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Reforma Profesional de{" "}
                  <span className="text-red-600">Sillas para Barberías</span>{" "}
                  y Salones de Belleza
                </h1>
                <p className="text-white sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Especializados en restaurar y reformar sillas de barbero y salón de belleza. 
                  Devolvemos la comodidad y elegancia que sus clientes merecen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white cu px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
                  onClick={() => navigate('/auth?type=client')}
                >
                  🚀 Regístrese Ahora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 bg-blue-600 cursor-pointer border-blue-600 text-white hover:bg-blue-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto gratis para reforma de sillas de ChairFix. ¿Puede ayudarme?', '_blank')}
                >
                  💬 WhatsApp Gratis
                </Button>
              </div>
            </div>

            {/* Coluna da Direita - Imagem */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/base.jpeg"
                  alt="Silla de barbero vintage clásica"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                {/* Badge de avaliação */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary fill-current" />
                      <span className="ml-1 text-sm sm:text-base font-bold text-foreground">4.9/5</span>
                    </div>
                   <span className="text-xs sm:text-sm text-muted-foreground">Evaluación</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">150+ Establecimientos Atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
 
 
      </section>
  
  )
}

export default Landing