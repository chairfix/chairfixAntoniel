"use client"
import React, { useState } from 'react'
import { Card, CardContent } from "@/ui/card";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

function Clientes() {
  const [realReviews, setRealReviews] = useState([]);

  return (
    <section className="py-16 bg-[#171717]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-2xl text-white sm:text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-red-400 text-red-400" />
            ))}
            <span className="ml-2 text-white text-base sm:text-lg font-medium">
              4.9/5 (234 valoraciones)
            </span>
          </div>
        </div>

        {/* Reseñas */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {realReviews.length > 0 ? (
            realReviews.map((review, index) => (
              <Card key={index} className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">"{review.comment}"</p>
                  <p className="text-sm font-medium">- {review.clients?.name || 'Cliente'}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <>
              {/* Reseña 1 */}
              <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-white mb-4">
                    "¡Excelente atención! Vinieron al salón y arreglaron 
                    las 8 sillas hidráulicas en apenas medio día. 
                    ¡Trabajo impecable y precio justo!"
                  </p>
                  <p className="text-sm font-medium text-white">- María Silva, Salón Bella Vista</p>
                </CardContent>
              </Card>

              {/* Reseña 2 */}
              <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-white mb-4">
                    "Reservé por WhatsApp y en 2 días todas las sillas 
                    de la barbería funcionaban perfectamente. 
                    ¡Lo recomiendo muchísimo!"
                  </p>
                  <p className="text-sm font-medium text-white">- Juan Santos, Barbería Moderna</p>
                </CardContent>
              </Card>

              {/* Reseña 3 */}
              <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-white mb-4">
                    "Hicieron cromado y tapicería completas. 
                    ¡Las sillas quedaron como nuevas! 
                    Ya es la tercera vez que los contrato."
                  </p>
                  <p className="text-sm font-medium text-white">- Ana Costa, Estudio de Belleza</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-200/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              ⭐ Transforma tu sillón hoy mismo...
            </h3>
            <p className="text-white mb-6 text-sm sm:text-base">
              Más de 5.000 sillas restauradas con 4.9/5 de valoración. ¡Su satisfacción es nuestra prioridad!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                onClick={() => window.open('https://wa.me/34685572880?text=¡Hola! He visto las valoraciones positivas de ChairFix y me gustaría solicitar un presupuesto. ¿Pueden ayudarme?', '_blank')}
              >
                🌟 Quiero Mi Presupuesto Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
                onClick={() => window.location.href = '/auth?type=client'}
              >
                📋 Registrarse y Hacer Seguimiento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clientes;
