"use client"
import React, { useState, useEffect } from 'react'
import { Card, CardContent , CardHeader, CardTitle, CardDescription } from "@/ui/card";
import {Target, Heart, Award } from "lucide-react";

// Componente animado para contar de 0 al valor final
function AnimatedNumber({ value, duration = 2000, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    if (isNaN(end)) return;

    const stepTime = 50; // ms por actualización
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <>
      {count.toFixed(decimals)}{suffix}
    </>
  );
}

function Numeros() {
  const [stats, setStats] = useState({
    totalServices: 0,
    totalClients: 0,
    avgRating: 0,
    totalReviews: 0
  });

  // Simular carga de datos (puedes reemplazar con datos reales)
  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalServices: 5000,
        totalClients: 1200,
        avgRating: 4.9,
        totalReviews: 1000
      });
    }, 1000);
  }, []);

  return (
     <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Números</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
<Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-[#ffe5d9] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-red-400" />
                </div>
                <CardTitle>Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Prolongar la vida útil de sillas hidráulicas a través de reparaciones especializadas, 
                  ofreciendo soluciones económicas y sostenibles para profesionales de la belleza.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-[#bbdefb] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle>Nuestros Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Calidad, puntualidad y transparencia en cada atención. 
                  Valoramos la confianza de nuestros clientes y la excelencia en cada reparación.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-[#f1c0e8] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-gray-400" />
                </div>
                <CardTitle>Nuestra Experiencia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Más de 10 años de experiencia en el mercado, especializados en sistema hidráulico 
                  y piezas de repuesto para sillas profesionales.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Nuestros Números</h3>
            <div className="grid gap-6 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber 
                    value={stats.totalServices > 0 ? stats.totalServices : 5000} 
                    suffix="+" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">Sillas Reparadas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  <AnimatedNumber 
                    value={stats.totalClients > 0 ? stats.totalClients : 1200} 
                    suffix="+" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">Clientes Atendidos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  <AnimatedNumber 
                    value={stats.avgRating > 0 ? stats.avgRating : 4.9} 
                    decimals={1} 
                    suffix="/5" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">Evaluación Media</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <AnimatedNumber 
                    value={95} 
                    suffix="%" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">Tasa de Éxito</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Numeros;


