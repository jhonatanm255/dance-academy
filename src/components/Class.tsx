// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import img1 from "../assets/arabian.jpeg"; // Ruta a la imagen de Danza Árabe
import img2 from "../assets/moderna.jpg"; // Ruta a la imagen de Danza Moderna
import img3 from "../assets/acro.jpeg"; // Ruta a la imagen de Acrodance
import img4 from "../assets/baby.jpg"; // Ruta a la imagen de Baby Dance

export default function Class() {
  const classes = [
    {
      title: "Danza Árabe",
      description:
        "Descubre la elegancia y expresión de la danza árabe. Aprende movimientos fluidos y técnicas tradicionales que te conectan con esta cultura milenaria.",
      image: img1, // Imagen asociada
    },
    {
      title: "Danza Moderna",
      description:
        "Explora tu creatividad con la danza moderna. Combina técnicas contemporáneas con emociones para crear coreografías únicas y expresivas.",
      image: img2, // Imagen asociada
    },
    {
      title: "Acrodance",
      description:
        "Fusión de acrobacia y danza. Desarrolla fuerza, flexibilidad y coordinación mientras creas coreografías llenas de dinamismo y espectacularidad.",
      image: img3, // Imagen asociada
    },
    {
      title: "Baby Dance",
      description:
        "Introduce a los más pequeños al mundo de la danza. Clases divertidas y lúdicas que fomentan el ritmo, la coordinación y el amor por el movimiento.",
      image: img4, // Imagen asociada
    },
  ];

  // useEffect(() => {
  //   const sr = ScrollReveal();

  //   // Animación para las tarjetas de clase
  //   sr.reveal(".class-card", {
  //     duration: 1000,
  //     opacity: 0,
  //     distance: "20px",
  //     origin: "bottom",
  //     delay: 300,
  //     interval: 200,
  //   });
  // }, []);

  return (
    <section
      id="class"
      className="py-20 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Disciplinas que se Imparten
          </h2>
          <p className="text-lg text-gray-600">
            Variedad de estilos para descubrir tu pasión por la danza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="class-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden"
            >
              {/* Imagen */}
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-64 object-cover"
              />

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-500 mb-4">
                  {cls.title}
                </h3>
                <p className="text-gray-700">{cls.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}