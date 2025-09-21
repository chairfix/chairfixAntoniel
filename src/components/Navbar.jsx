"use client";
import React, { useState } from "react";
import { Button } from "@/ui/button";
import { UserCircle, MessageCircle, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-2 sm:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-[90px] h-16 flex items-center justify-center overflow-visible">
            <img
              src="/favico.png"
              alt="ChairFix Logo"
              className="h-20 w-auto -mt-2"
            />
          </div>

          {/* Botón hamburguesa para móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navegación en escritorio */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="#servicos"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Servicios
            </a>
            <a
              href="#sobre"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Acerca de
            </a>
            <a
              href="#galeria"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Galería
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Botones */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/auth?type=client")}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:from-red-700 hover:to-red-800 shadow-lg"
            >
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Registro/Acceso</span>
            </Button>
            <Button
          
              size="sm"
              onClick={() =>
                window.open(
                  "https://wa.me/34685572880?text=¡Hola! Me gustaría un presupuesto para reforma de sillas de ChairFix. ¿Puede ayudarme?",
                  "_blank"
                )
              }
              className="shadow-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            <nav className="flex flex-col space-y-2">
              <a
                href="#servicos"
                className="block text-foreground hover:text-primary font-medium"
              >
                Servicios
              </a>
              <a
                href="#sobre"
                className="block text-foreground hover:text-primary font-medium"
              >
                Acerca de
              </a>
              <a
                href="#galeria"
                className="block text-foreground hover:text-primary font-medium"
              >
                Galería
              </a>
              <a
                href="#contato"
                className="block text-foreground hover:text-primary font-medium"
              >
                Contacto
              </a>
            </nav>
            <div className="flex flex-col sm:hidden space-y-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/auth?type=client")}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:from-red-700 hover:to-red-800 shadow"
              >
                <UserCircle className="mr-2 h-4 w-4" />
                Entrar
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
                className="shadow"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
