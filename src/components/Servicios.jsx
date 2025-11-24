"use client"
import React from 'react'
import { Armchair, Droplets, Award, Hammer, Paintbrush, Palette } from "lucide-react";
import { Button } from "@/ui/button";

function Servicios() {
  return (
<section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Nuestros Servicios</h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
              Ofrecemos soluciones completas para mantener sus sillas siempre en perfecto estado, 
              garantizando comodidad y profesionalismo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Reforma de Estofado */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Armchair className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Reforma de Tapicería</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Cambio completo de tapicería con materiales de alta calidad, resistentes y fáciles de limpiar.
              </p>
            </div>

            {/* Reparo Hidráulico */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Reparación Hidráulica</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Mantenimiento y cambio de sistemas hidráulicos para altura y reclinación perfectas.
              </p>
            </div>

            {/* Restauração Vintage */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Restauración Vintage</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Preservamos el encanto clásico de las sillas antiguas con técnicas especializadas.
              </p>
            </div>

            {/* Reforço Estrutural */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Hammer className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Refuerzo Estructural</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Soldaduras, tornillos y refuerzos para garantizar máxima durabilidad y seguridad.
              </p>
            </div>

            {/* Pintura e Acabamento */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Paintbrush className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Pintura y Acabado</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Pintura profesional con pintura automotriz para resistir el uso intensivo.
              </p>
            </div>

            {/* Personalização */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-red-200 transition-colors">
                <Palette className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">Personalización</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Colores, logos y detalles personalizados para combinar con su marca.
              </p>
            </div>
          </div>

          {/* CTA na Seção de Serviços */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-accent/10 to-accent/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                💪 ¿Listo para Renovar sus Sillas?
              </h3>
              <p className="text-white mb-6">
                No deje que las sillas rotas perjudiquen su negocio. ¡Solicite un presupuesto gratuito ahora!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                  onClick={() => window.open('https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto gratuito para reforma de sillas. ¿Cuál es el mejor horario para conversar?', '_blank')}
                >
                  💬 Presupuesto Gratis vía WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className=" border-2 border-secondary bg-blue-600 cursor-pointer  text-white hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                  onClick={() => navigate('/auth?type=client')}
                >
                  📝 Registrarse y Programar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Servicios