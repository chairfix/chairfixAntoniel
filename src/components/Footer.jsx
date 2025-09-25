import React from "react";
import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-white text-black py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Contenedor principal en fila */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
      
      {/* Logo grande alineado a la izquierda */}
      <div className="md:mr-auto">
        <Image
          src="/logo.png"
          alt="Logo de la empresa"
          width={150} // Tamaño grande
          height={150}
        />
      </div>

      {/* Párrafo centrado */}
      <p className="text-sm text-black max-w-md text-center mx-auto leading-relaxed md:absolute left-1/2 transform -translate-x-1/2">
        Especialistas en reparación hidráulica de sillas para salones y barberías. <br />
        Atención en toda la región con garantía total.
      </p>
    </div>

    {/* Línea separadora */}
    <div className="border-t border-gray-700 my-6"></div>

    {/* Copyright */}
    <div className="text-center text-sm">
      &copy; {new Date().getFullYear()} ChairFix. Todos los derechos reservados.
    </div>
  </div>
</footer>

  );
}

export default Footer;
