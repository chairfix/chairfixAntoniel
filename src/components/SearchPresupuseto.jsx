"use client";
import React, { useState } from "react";

export default function SearchPresupuesto({ isOpen, onClose }) {
  if (!isOpen) return null;

  // 🔹 Array de objetos (mock)
  const data = [
    {
      codigo: "A123",
      nombre: "Proyecto Alfa",
      presupuesto: 5000,
      abonado: 2000,
      usado: 3000,
    },
    {
      codigo: "B456",
      nombre: "Proyecto Beta",
      presupuesto: 8000,
      abonado: 4000,
      usado: 4000,
    },
    {
      codigo: "C789",
      nombre: "Proyecto Gamma",
      presupuesto: 12000,
      abonado: 10000,
      usado: 2000,
    },
    {
      codigo: "D101",
      nombre: "Proyecto Gamma",
      presupuesto: 7000,
      abonado: 7000,
      usado: 0,
    },
  ];

  const [codigo, setCodigo] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = data.find(
      (item) => item.codigo.toLowerCase() === codigo.toLowerCase()
    );
    setResult(found || null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-[400px] shadow-xl z-50">
        <h2 className="text-xl font-bold mb-4">Buscar código</h2>

        {/* Input */}
        <input
          type="text"
          placeholder="Ingresa el código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        {/* Botón */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Buscar
        </button>

        {/* Resultado */}
        {result ? (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <p>
              <strong>Nombre:</strong> {result.nombre}
            </p>
            <p>
              <strong>Presupuesto:</strong> {result.presupuesto}
            </p>
            <p>
              <strong>Abonado:</strong> {result.abonado}
            </p>

            {result.usado === 0 ? (
              <p className="text-green-600 font-semibold">Usted está al día</p>
            ) : (
              <p>
                <strong>Falta:</strong> {result.usado}
              </p>
            )}
          </div>
        ) : codigo !== "" ? (
          <p className="mt-4 text-red-500">No se encontró ese código.</p>
        ) : null}

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 border rounded hover:bg-gray-100"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
