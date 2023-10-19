import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    tipoUsuario: "administrador",
    dondeNosViste: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold text-center">Formulario de contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="celular"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Celular
          </label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipoUsuario"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo de Usuario
          </label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="administrador">Administrador</option>
            <option value="portero">Portero</option>
            <option value="inquilino">Inquilino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dondeNosViste"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ¿Por dónde nos viste?
          </label>
          <input
            type="text"
            id="dondeNosViste"
            name="dondeNosViste"
            value={formData.dondeNosViste}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
