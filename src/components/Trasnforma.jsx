"use client";
import React from "react";
import { Button } from "../ui/button";
import { MessageCircle, Smartphone } from "lucide-react";

function Trasnforma() {
  return (
    <section className="bg-gray-200/30 backdrop-blur-sm text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          ¡Transforma tu sillón hoy mismo!
        </h2>

        <p className="text-white sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          No dejes que las sillas rotas perjudiquen tu negocio. Contacta ahora y
          obtén un presupuesto gratuito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto">
          <Button
            size="lg"
            variant="secondary"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full sm:w-auto px-5 py-4 sm:px-6 sm:py-5 text-base sm:text-lg"
            onClick={() =>
              window.open(
                "https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto gratuito para reparación de sillas.",
                "_blank"
              )
            }
          >
            <MessageCircle 
            className="mr-2 h-5 w-5" 
            />
            <span 
            className="hidden sm:inline text-white font-bold"
            >
              Presupuesto Gratuito vía WhatsApp
            </span>
            <span className="sm:hidden text-white"
            style={{fontWeight: 700}}>Presupuesto WhatsApp</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 bg-blue-600 cursor-pointer border-blue-600 text-white  hover:bg-blue-700 hover:text-white w-full sm:w-auto px-5 py-4 sm:px-6 sm:py-5 text-base sm:text-lg"
            onClick={() => window.open("tel:+34685572880", "_self")}
          >
            <Smartphone className="mr-2 h-5 w-5 " />
            <span className="hidden sm:inline text-white font-bold">
              Llama Ahora: +34 685 572 880
            </span>
            <span className="sm:hidden" style={{fontWeight: 700}}>Llamar</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Trasnforma;
