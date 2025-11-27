// "use client";
// import React, { useState } from "react";

// export default function SearchPresupuesto({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   const [codigo, setCodigo] = useState("");
//   const [result, setResult] = useState(null);
//   const [isDetailOpen, setIsDetailOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pendiente": return "text-yellow-600";
//       case "Recibida": return "text-blue-600";
//       case "en Taller": return "text-orange-600";
//       case "Terminada": return "text-green-600";
//       case "Entregada": return "text-purple-600";
//       default: return "text-gray-600";
//     }
//   };

//   const handleSearch = async () => {
//     if (!codigo.trim()) return;
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const response = await fetch("https://backchairfix.onrender.com/attendance");
//       if (!response.ok) throw new Error("Error al obtener los registros");
//       const data = await response.json();

//       // Filtramos por attendance_id
//       const found = data.find(
//         (item) => item.attendance_id.toString() === codigo.trim()
//       );

//       if (found) {
//         setResult(found);
//         setIsDetailOpen(true);
//       } else {
//         setError("No se encontró ese código");
//         setIsDetailOpen(false);
//       }
//     } catch (err) {
//       setError(err.message);
//       setIsDetailOpen(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal Principal */}
//       <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//         <div className="bg-white rounded-lg shadow-2xl w-[400px] p-6 relative">
//           <h2 className="text-2xl font-bold mb-4 text-center">Buscar Asistencia</h2>

//           <input
//             type="text"
//             placeholder="Ingresa el ID de asistencia"
//             value={codigo}
//             onChange={(e) => setCodigo(e.target.value)}
//             className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
//             disabled={loading}
//           >
//             {loading ? "Buscando..." : "Buscar"}
//           </button>

//           {error && <p className="mt-2 text-red-500 text-center">{error}</p>}

//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 border rounded hover:bg-gray-100 transition"
//           >
//             Cerrar
//           </button>
//         </div>
//       </div>

//       {/* Modal Secundario */}
//       {isDetailOpen && result && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
//           <div className="bg-white rounded-lg shadow-2xl w-[450px] p-6 relative">
//             <h2 className="text-2xl font-bold mb-4 text-center">Detalle de Asistencia</h2>

//             <div className="flex items-center space-x-4 border p-4 rounded bg-gray-50">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/logo.png"
//                   alt="Logotipo Empresa"
//                   className="h-16 w-16 object-contain"
//                 />
//               </div>

//               <div>
//                 <p><strong>Motivo:</strong> {result.motivo}</p>
//                 <p><strong>Presupuesto:</strong> ${result.presupuesto}</p>
//                 <p><strong>Abonado:</strong> ${result.abonado}</p>
//                 {parseFloat(result.usado) === 0 ? (
//                   <p className="text-green-600 font-semibold">Usted está al día</p>
//                 ) : (
//                   <p><strong>Falta:</strong> ${result.usado}</p>
//                 )}
//                 <p className={`mt-2 font-semibold ${getStatusColor(result.status)}`}>
//                   <strong>Estatus:</strong> {result.status}
//                 </p>
//                 <p className="mt-1 text-sm text-gray-500">
//                   <strong>Empleado:</strong> {result.employee.first_name}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => setIsDetailOpen(false)}
//               className="mt-6 w-full py-2 border rounded hover:bg-gray-100 transition"
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import React, { useState } from "react";

// 🔹 Array de ejemplo (simula datos del backend)
const backendData = [
  {
    attendance_id: 1,
    motivo: "Mantenimiento de sillas",
    presupuesto: "500",
    abonado: "300",
    usado: "200",
    total: null,
    status: "Pendiente",
    createdAt: "2025-11-27T10:00:00.000Z",
    updatedAt: "2025-11-27T12:00:00.000Z",
    employee_id: 1,
    employee: {
      id: 1,
      first_name: "Darwin",
      email: "darwin@example.com",
      phone_number: "99923344543",
      hire_date: "2025-11-26",
      place: "Taller Central",
      salary: 205,
    },
  },
  {
    attendance_id: 2,
    motivo: "Reparación de ruedas",
    presupuesto: "300",
    abonado: "150",
    usado: "150",
    total: null,
    status: "Recibida",
    createdAt: "2025-11-26T09:30:00.000Z",
    updatedAt: "2025-11-26T11:00:00.000Z",
    employee_id: 2,
    employee: {
      id: 2,
      first_name: "Laura",
      email: "laura@example.com",
      phone_number: "988112233",
      hire_date: "2025-10-15",
      place: "Taller Norte",
      salary: 180,
    },
  },
  {
    attendance_id: 3,
    motivo: "Cambio de tapicería",
    presupuesto: "700",
    abonado: "700",
    usado: "0",
    total: null,
    status: "Terminada",
    createdAt: "2025-11-25T14:00:00.000Z",
    updatedAt: "2025-11-25T16:00:00.000Z",
    employee_id: 3,
    employee: {
      id: 3,
      first_name: "Carlos",
      email: "carlos@example.com",
      phone_number: "977445566",
      hire_date: "2025-09-20",
      place: "Sucursal Sur",
      salary: 220,
    },
  },
];

export default function SearchPresupuesto({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [codigo, setCodigo] = useState("");
  const [result, setResult] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Función para colorear el estatus
  const getStatusColor = (status) => {
    switch (status) {
      case "Pendiente": return "text-yellow-600";
      case "Recibida": return "text-blue-600";
      case "en Taller": return "text-orange-600";
      case "Terminada": return "text-green-600";
      case "Entregada": return "text-purple-600";
      default: return "text-gray-600";
    }
  };

  const handleSearch = () => {
    setError("");
    const found = backendData.find(
      (item) => item.attendance_id.toString() === codigo.trim()
    );

    if (found) {
      setResult(found);
      setIsDetailOpen(true);
    } else {
      setError("No se encontró ese código");
      setResult(null);
      setIsDetailOpen(false);
    }
  };

  return (
    <>
      {/* Modal Principal */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-2xl w-[400px] p-6 relative">
          <h2 className="text-2xl font-bold mb-4 text-center">Buscar Asistencia</h2>

          <input
            type="text"
            placeholder="Ingresa el ID de asistencia"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Buscar
          </button>

          {error && <p className="mt-2 text-red-500 text-center">{error}</p>}

          <button
            onClick={onClose}
            className="mt-4 w-full py-2 border rounded hover:bg-gray-100 transition"
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* Modal Secundario */}
      {isDetailOpen && result && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg shadow-2xl w-[450px] p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Detalle de Asistencia</h2>

            <div className="flex items-center space-x-4 border p-4 rounded bg-gray-50">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Logotipo Empresa"
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* Datos */}
              <div>
                <p><strong>Motivo:</strong> {result.motivo}</p>
                <p><strong>Presupuesto:</strong> ${result.presupuesto}</p>
                <p><strong>Abonado:</strong> ${result.abonado}</p>
                {parseFloat(result.usado) === 0 ? (
                  <p className="text-green-600 font-semibold">Usted está al día</p>
                ) : (
                  <p><strong>Falta:</strong> ${result.usado}</p>
                )}
                <p className={`mt-2 font-semibold ${getStatusColor(result.status)}`}>
                  <strong>Estatus:</strong> {result.status}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  <strong>Cliente:</strong> {result.employee.first_name}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsDetailOpen(false)}
              className="mt-6 w-full py-2 border rounded hover:bg-gray-100 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
