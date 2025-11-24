"use client"
import React from 'react'
import { Button } from "@/ui/button";
import { Award } from "lucide-react";


function Sobre() {
  return (
      <section id="sobre" className="py-20 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna da Esquerda - Texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Especialistas en Sillas Profesionales
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Con más de 10 años de experiencia, somos referencia en la reforma de sillas para barberías y salones de belleza. 
                Entendemos las necesidades específicas de su negocio.
              </p>

              {/* Lista de características */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white">Técnicos especializados en equipos de belleza</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white">Materiales profesionales de alta durabilidad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white">Garantía de 6 meses en todos los servicios</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white">Recogida y entrega por solo 20,00 euros en Valencia</span>
                </div>
              </div>

              {/* Badge de experiência */}
              <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-bold text-lg">10+</span>
                <span className="ml-1">Años de Experiencia</span>
              </div>
            </div>

            {/* Coluna da Direita - Imagem */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/antique.jpg"
                  alt="Cadeira de barbeiro antiga para restauração"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA na Seção Sobre */}
          <div className="text-center mt-12">
            <div className="bg-gray-100 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏆 Elija la Experiencia de 10+ Años
              </h3>
              <p className="text-gray-600 mb-6">
                Únase a los miles de clientes satisfechos. ¡Garantía de 6 meses y recogida/entrega incluida en Valencia!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                  onClick={() => window.open('https://wa.me/34685572880?text=¡Hola! Quiero conocer más sobre la experiencia de ChairFix. ¿Pueden explicarme el proceso de reforma?', '_blank')}
                >
                  🤝 Hablar con Especialista
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 bg-blue-600 cursor-pointer border-blue-600 text-white hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                  onClick={() => window.open('https://instagram.com/chairfix', '_blank')}
                >
                  📸 Ver Trabajos en Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Sobre