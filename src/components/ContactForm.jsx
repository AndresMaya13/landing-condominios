import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    email: "",
    userType: "administrador",
    origin: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let infoData = `Hola, mi nombre es ${formData.name}
    Los vi por: ${formData.origin}
    Soy ${formData.userType}
    
    Mis datos de contacto son:
    
    celular: ${formData.cellphone}
    email: ${formData.email}
    
    Estoy interesado en conocer Condominios`;

    let url = `https://wa.me/573185804092?text=${encodeURIComponent(infoData)}`

    window.open(url, "_blank", "noreferrer");
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
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cellphone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Celular
          </label>
          <input
            type="text"
            id="cellphone"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo de Usuario
          </label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
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
            htmlFor="origin"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ¿Por dónde nos viste?
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
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
