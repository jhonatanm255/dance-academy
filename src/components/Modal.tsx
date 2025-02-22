import React from "react";

interface ModalProps {
  isOpen: boolean; 
  onClose: () => void; // Función para cerrar el modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // URL de WhatsApp con mensaje predefinido
  const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(
    "¡Hola! Quiero reservar mi primera clase gratis."
  )}`;

  return (
    <div className="p-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-pink-50 rounded-xl shadow-2xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">
            ¡Primera Clase Gratis!
          </h2>
          <p className="text-gray-700 mb-4">
            ¡Ven y descubre el mundo de la danza con nosotros! Ofrecemos una
            primera clase totalmente gratis para que experimentes nuestras
            instalaciones y conozcas a nuestros instructores.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Horarios disponibles:</strong>
            <br />
            Lunes a Viernes: 4:00 PM - 8:00 PM
            <br />
            Sábados: 10:00 AM - 2:00 PM
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Ubicación:</strong>
            <br />
            Calle Danza 123, Ciudad de la Música
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300 inline-block"
          >
            ¡Reserva tu clase ahora!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;