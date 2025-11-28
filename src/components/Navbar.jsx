"use client";
import React, { useState } from "react";
import { Button } from "@/ui/button";
import { UserCircle, MessageCircle, Menu, X } from "lucide-react";

import SearchPresupuesto from "./SearchPresupuseto.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        {/* NAVBAR MÁS BAJA EN MÓVIL */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-1 sm:py-2">
          <div className="flex items-center justify-between">
            
            {/* LOGO MÁS ANCHO EN MÓVIL */}
            <div className="relative w-[100px] h-14 flex items-center justify-center overflow-visible max-[632px]:mx-auto">
              <img
                src="/logo.png"
                alt="ChairFix Logo"
                className="w-[120px] h-auto -mt-2 max-[632px]:mx-auto"
              />
            </div>

            {/* Botón hamburguesa */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Navegación escritorio */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#servicos"
                className="text-black transition-colors"
                style={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Servicios
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary font-medium transition-colors"
                style={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Acerca de
              </a>
              <a
                href="#galeria"
                className="text-foreground hover:text-primary font-medium transition-colors"
                style={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Galería
              </a>
            </nav>

            {/* Botones */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(true)}
                className="cursor-pointer bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:from-red-700 hover:to-red-800 shadow-lg"
              >
                <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                  Ver Status
                </span>
              </Button>

              <Button
                size="sm"
                onClick={() =>
                  window.open(
                    "https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto para reforma de sillas de ChairFix. ¿Puede ayudarme?",
                    "_blank"
                  )
                }
                className="cursor-pointer bg-blue-600 shadow-lg border-2 border-blue-600 text-white hover:bg-blue-700 hover:text-white"
              >
                <MessageCircle
                  className="mr-2 h-4 w-4"
                  style={{ fontWeight: "700", fontSize: "1.2rem" }}
                />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="lg:hidden mt-2 space-y-2">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#servicos"
                  className="block text-foreground hover:text-primary font-medium"
                  style={{ fontWeight: "700", fontSize: "1.2rem" }}
                >
                  Servicios
                </a>
                <a
                  href="#sobre"
                  className="block text-foreground hover:text-primary font-medium"
                  style={{ fontWeight: "700", fontSize: "1.2rem" }}
                >
                  Acerca de
                </a>
                <a
                  href="#galeria"
                  className="block text-foreground hover:text-primary font-medium"
                  style={{ fontWeight: "700", fontSize: "1.2rem" }}
                >
                  Galería
                </a>
              </nav>

              <div className="flex flex-col sm:hidden space-y-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setModalOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:from-red-700 hover:to-red-800 shadow"
                >
                  Ver Status
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto para reforma de sillas de ChairFix. ¿Puede ayudarme?",
                      "_blank"
                    )
                  }
                  className="shadow bg-blue-600 text-white"
                >
                  <MessageCircle
                    className="mr-2 h-4 w-4"
                    style={{ fontWeight: "700", fontSize: "1.2rem" }}
                  />
                  Chat
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <SearchPresupuesto
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
