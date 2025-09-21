import React from "react";
import { Button } from "../ui/button";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";

function Footer() {
  return (
    <footer className=" bg-gray-350 text-center py-4 px-2 ">
      <div className="max-w-3xl mx-auto space-y-3 ">
        {/* Logo */}
        <div className="flex justify-center ">
          <Image src={logo} alt="ChairFix Logo" width={150} height={80} />
        </div>

        {/* Descripción */}
        <p className="text-sm text-black max-w-md mx-auto leading-relaxed ">
          Especialistas en reparación hidráulica de sillas para salones y
          barberías. <br />
          Atención en toda la región con garantía total.
        </p>

        {/* Iconos redes sociales */}
        <div className="flex justify-center space-x-6">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://instagram.com/chairfix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <a
              href="https://youtube.com/@chair-fix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <a
              href="https://wa.me/34685572880"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-black">
          © 2024 ChairFix. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
