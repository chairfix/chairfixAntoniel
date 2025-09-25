import Clientes from "@/components/Clientes";
import Excelencia from "@/components/Excelencia";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Numeros from "@/components/Numeros";
import { PublicGallery } from "@/components/PublicGallery";
import Servicios from "@/components/Servicios";
import Sobre from "@/components/Sobre";
import Trasnforma from "@/components/Trasnforma";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <PublicGallery />
      <Servicios />
      <Sobre />
      <Numeros />
      <Excelencia />
      <Clientes />
      <Trasnforma />
      <Footer />
    </div>
  );
}
