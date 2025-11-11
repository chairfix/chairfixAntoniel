"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/ui/card";
import { Button } from "../ui/button";
import {
  Wrench,
  MapPin,
  Clock,
  Shield,
  Smartphone,
  Users,
  UserCircle,
  CircleCheckBig,
} from "lucide-react";
import { AiFillCheckCircle } from "react-icons/ai";

function Excelencia() {
  return (
    <section className="bg-[#171717] backdrop-blur-sm py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">¿Por qué elegir ChairFix?</h2>
          <p className="text-white text-lg">
            Excelencia en cada detalle del servicio
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#eb5e28] rounded-lg">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Reparación Especializada</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                Especialistas en sistema hidráulico con más de 10 años de
                experiencia. Utilizamos solo piezas originales y certificadas.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-400 to-secondary/80 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Atención en el Lugar</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                ¡Llevamos nuestro taller hasta usted! Atención domiciliaria y
                empresarial en toda la región con GPS en tiempo real.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Agilidad Extrema</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                90% de las reparaciones se completan en la primera visita.
                Programación online y WhatsApp para máxima comodidad.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Garantía Total</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                Garantía de 6 meses en todos los servicios.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Tecnología Avanzada</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                Sistema integrado con WhatsApp, GPS y portal online. Siga su
                servicio en tiempo real.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Confianza</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white">
                Más de 5.000 sillas reparadas y miles de clientes satisfechos en
                toda la región.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA no meio da página */}
        <div className="text-center mt-12">
          <div className="bg-gray-200/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¡Regístrese y tenga ventajas exclusivas!
            </h3>
            {/* <div className="text-sm text-black mb-6 space-y-2">
              <div>
                <CircleCheckBig className="h-5 w-5 text-green-600" /> Descuento
                del 10% en el primer servicio
              </div>
              <div>
                <CircleCheckBig className="h-5 w-5 text-green-600" />{" "}
                Seguimiento en tiempo real
              </div>
              <div>
                <CircleCheckBig className="h-5 w-5 text-green-600" /> Historial
                completo de reparaciones
              </div>
              <div>
                <CircleCheckBig className="h-5 w-5 text-green-600" /> Atención
                prioritaria
              </div>
            </div> */}
            <div className="text-sm text-black  mb-6 space-y-2">
  <div className="flex justify-center gap-2">
    <CircleCheckBig className="h-5 w-5 text-green-600 mt-0.5" />
    <span className="text-white">Descuento del 10% en el primer servicio</span>
  </div>
  <div className="flex justify-center gap-2">
    <CircleCheckBig className="h-5 w-5 text-green-600 mt-0.5" />
    <span className="text-white">Seguimiento en tiempo real</span>
  </div>
    <div className="flex justify-center gap-2">
    <CircleCheckBig className="h-5 w-5 text-green-600 mt-0.5" />
    <span className="text-white">Historial completo de reparaciones</span>
  </div>
    <div className="flex justify-center gap-2">
    <CircleCheckBig className="h-5 w-5 text-green-600 mt-0.5" />
    <span className="text-white">Atención prioritaria</span>
  </div>
</div>

            <Button
              size="lg"
              onClick={() => navigate("/auth?type=client")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <UserCircle className="mr-2 h-5 w-5" />
              Crear Mi Cuenta 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Excelencia;
