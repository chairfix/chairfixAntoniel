"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../redux/action.js"; // importa tu acción correctamente

function Modal() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    info: "",
  });

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamas a la acción para crear usuario/presupuesto
      await dispatch(crearUsuario(formData));
      alert("Presupuesto enviado con éxito!");
      toggleModal();
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        info: "",
      });
    } catch (error) {
      alert("Error al enviar el presupuesto.");
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Solicitar Presupuesto
      </button>

      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-opacity-10 backdrop-blur-md"
          onClick={toggleModal}
        >
          <div
            className="relative p-4 w-full max-w-md max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Solicitar Presupuesto
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={toggleModal}
                  aria-label="Close modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <form className="p-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Tu teléfono"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Tu dirección"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Tu email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="info"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Consulta
                  </label>
                  <textarea
                    name="info"
                    id="info"
                    rows={4}
                    value={formData.info}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Describe tu consulta para el presupuesto"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                >
                  Solicitar Presupuesto
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
