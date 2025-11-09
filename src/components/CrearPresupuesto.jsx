'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsuarios,
  createPresupuesto,
  crearUsuario,
} from "../redux/action";

export default function PresupuestoForm() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.user);

  const [form, setForm] = useState({
    diste: "",
    gasto: "",
    userId: "",
    nuevoUsuario: "",
    items: [{ servicio: "", monto: "" }],
    descuentoTipo: "monto",
    descuentoValor: 0,
    aplicarIVA: false,
    ivaPorcentaje: 0,
  });

  const [total, setTotal] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  useEffect(() => {
    const totalItems = form.items.reduce(
      (acc, item) => acc + Number(item.monto || 0),
      0
    );

    let descuento = 0;
    if (form.descuentoTipo === "monto") {
      descuento = Number(form.descuentoValor || 0);
    } else if (form.descuentoTipo === "porcentaje") {
      descuento = (Number(form.descuentoValor || 0) / 100) * totalItems;
    }

    const subtotal = totalItems - descuento;
    const iva = form.aplicarIVA
      ? (Number(form.ivaPorcentaje || 0) / 100) * subtotal
      : 0;

    const totalFinalCalc = subtotal + iva;

    setTotal(totalItems);
    setTotalFinal(totalFinalCalc);
  }, [
    form.items,
    form.descuentoTipo,
    form.descuentoValor,
    form.aplicarIVA,
    form.ivaPorcentaje,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...form.items];
    updatedItems[index][field] = value;
    setForm({ ...form, items: updatedItems });
  };

  const addItem = () => {
    setForm({ ...form, items: [...form.items, { servicio: "", monto: "" }] });
  };

  const removeItem = (index) => {
    const updatedItems = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let usuarioId = form.userId;

    if (!usuarioId && form.nuevoUsuario.trim()) {
      try {
        const nuevoUsuario = {
          name: form.nuevoUsuario.trim(),
          phone: "",
          address: "",
          email: "",
        };

        const response = await dispatch(crearUsuario(nuevoUsuario));
        usuarioId = response.payload.id;
      } catch (error) {
        console.error("Error al crear el usuario:", error);
        alert("No se pudo crear el nuevo usuario.");
        return;
      }
    }

    if (!usuarioId) {
      alert("Debe seleccionar o crear un usuario.");
      return;
    }

    const dataToSend = {
      diste: Number(form.diste),
      gasto: Number(form.gasto),
      total: totalFinal,
      items: form.items,
      userId: usuarioId,
      descuento: {
        tipo: form.descuentoTipo,
        valor: Number(form.descuentoValor),
      },
      iva: form.aplicarIVA ? Number(form.ivaPorcentaje) : 0,
    };

    dispatch(createPresupuesto(dataToSend));
    alert("Presupuesto enviado exitosamente");

    setForm({
      diste: "",
      gasto: "",
      userId: "",
      nuevoUsuario: "",
      items: [{ servicio: "", monto: "" }],
      descuentoTipo: "monto",
      descuentoValor: 0,
      aplicarIVA: false,
      ivaPorcentaje: 0,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Presupuesto</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Usuario */}
        <div>
          <label className="block font-semibold mb-1">Usuario:</label>
          <select
            name="userId"
            value={form.userId}
            onChange={(e) =>
              setForm({ ...form, userId: e.target.value, nuevoUsuario: "" })
            }
            className="w-full p-2 border rounded-md mb-2"
          >
            <option value="">-- Seleccione un usuario existente --</option>
            {usuarios.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>

          <div className="text-center text-sm text-gray-500 mb-1">o</div>

          <input
            type="text"
            name="nuevoUsuario"
            value={form.nuevoUsuario}
            onChange={(e) =>
              setForm({ ...form, nuevoUsuario: e.target.value, userId: "" })
            }
            placeholder="Nombre de nuevo usuario"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Diste / Gasto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Diste ($):</label>
            <input
              type="number"
              name="diste"
              value={form.diste}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Gasto ($):</label>
            <input
              type="number"
              name="gasto"
              value={form.gasto}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Servicios */}
        <div>
          <label className="block font-semibold mb-2">Servicios:</label>
          {form.items.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Servicio"
                value={item.servicio}
                onChange={(e) =>
                  handleItemChange(index, "servicio", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="$ Monto"
                value={item.monto}
                onChange={(e) =>
                  handleItemChange(index, "monto", e.target.value)
                }
                className="w-32 p-2 border rounded-md"
                required
              />
              {form.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="text-blue-500 font-semibold mt-2"
          >
            + Agregar Servicio
          </button>
        </div>

        {/* Descuento */}
        <div>
          <label className="block font-semibold mb-1">Descuento:</label>
          <div className="flex items-center gap-4">
            <select
              name="descuentoTipo"
              value={form.descuentoTipo}
              onChange={handleChange}
              className="p-2 border rounded-md"
            >
              <option value="monto">Monto ($)</option>
              <option value="porcentaje">Porcentaje (%)</option>
            </select>
            <input
              type="number"
              name="descuentoValor"
              value={form.descuentoValor}
              onChange={handleChange}
              className="w-40 p-2 border rounded-md"
              placeholder="Valor"
            />
          </div>
        </div>

        {/* IVA */}
        <div>
          <label className="flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              checked={form.aplicarIVA}
              onChange={(e) =>
                setForm({ ...form, aplicarIVA: e.target.checked })
              }
            />
            Aplicar IVA
          </label>

          {form.aplicarIVA && (
            <input
              type="number"
              name="ivaPorcentaje"
              value={form.ivaPorcentaje}
              onChange={handleChange}
              className="mt-2 w-40 p-2 border rounded-md"
              placeholder="IVA %"
            />
          )}
        </div>

        {/* Totales */}
        <div className="text-right space-y-1">
          <div className="font-medium">Total Servicios: ${total.toFixed(2)}</div>
          <div className="font-bold text-xl">
            Total Final: ${totalFinal.toFixed(2)}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Enviar Presupuesto
        </button>
      </form>
    </div>
  );
}
