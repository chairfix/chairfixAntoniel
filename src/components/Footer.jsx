import React from "react";
import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-[#171717] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal flexible */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
  src="/Logoc.png"
  alt="Logo de la empresa"
  width={120}
  height={120}
   className="w-24 h-24 md:w-32 md:h-32 object-contain" 
/>
          </div>

          {/* Texto descriptivo */}
          <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Especialistas en reparación hidráulica de sillas para salones y barberías. <br />
            Atención en toda la región con garantía total.
          </p>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ChairFix. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
