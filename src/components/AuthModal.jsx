"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { login, register } from "../reducer/action";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      await Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos.",
      });
      return;
    }

    try {
      if (activeTab === "login") {
        await dispatch(login(email, password));
        onClose(); // cerrar modal después del login exitoso
      } else {
        await dispatch(register(email, password));
        await Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Usuario creado con éxito. Ahora puedes iniciar sesión.",
        });
        setActiveTab("login"); // cambia a login después del alert
      }
    } catch (err) {
          console.log("ERROR:", err); // <-- agrega esto
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.msg ||
        "Error inesperado";
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: msg,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg p-6 relative">
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>

        {/* Título */}
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-1">
          Portal de Cliente
        </h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          Servicios y Cotizaciones
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => {
              setActiveTab("login");
            }}
            className={`px-4 py-1 font-medium rounded-l-md ${
              activeTab === "login"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setActiveTab("registro");
            }}
            className={`px-4 py-1 font-medium rounded-r-md ${
              activeTab === "registro"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Registro
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Tu contraseña"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
          >
            {activeTab === "login" ? "Entrar" : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
