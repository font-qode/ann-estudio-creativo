import "./Trabajos.css";
import { motion } from "motion/react";

const proyectos = [
  {
    numero: "01",
    nombre: "Marca uno",
    descripcion: "Social Media · Producción",
    imagenes: [
      "/img/trabajos/marca1-1.jpg",
      "/img/trabajos/marca1-2.jpg",
      "/img/trabajos/marca1-3.jpg",
      "/img/trabajos/marca1-4.jpg",
      "/img/trabajos/marca1-5.jpg",
    ],
  },
  {
    numero: "02",
    nombre: "Marca dos",
    descripcion: "Dirección creativa · Producción",
    imagenes: [
      "/img/trabajos/marca2-1.jpg",
      "/img/trabajos/marca2-2.jpg",
      "/img/trabajos/marca2-3.jpg",
      "/img/trabajos/marca2-4.jpg",
      "/img/trabajos/marca2-5.jpg",
    ],
  },
  {
    numero: "03",
    nombre: "Marca tres",
    descripcion: "Social Media · Dirección creativa",
    imagenes: [
      "/img/trabajos/marca3-1.jpg",
      "/img/trabajos/marca3-2.jpg",
      "/img/trabajos/marca3-3.jpg",
      "/img/trabajos/marca3-4.jpg",
      "/img/trabajos/marca3-5.jpg",
    ],
  },
];

function Trabajos() {
  return (
    <section id="trabajos" className="trabajos-section">
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className="trabajos-title-container">
        <h2 className="trabajos-title">Trabajos</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className="trabajos-subtitles-container">
        <div className="subtitle1-container">
          <h3 className="subtitle1">
            Nuestra mirada, 
            <span className="systems-script">en acción.</span>
          </h3>
        </div>

        <div className="subtitle2-container">
          <p className="subtitle2">
            Una selección de proyectos de comunicación,
            campañas y producciones.
          </p>
        </div>
      </motion.div>

      {proyectos.map((proyecto, index) => (
        <motion.article initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
          className="trabajos-info-carrousel-container"
          key={proyecto.numero}
        >
          <div className="trabajos-carrousel-container">
            {proyecto.imagenes.map((imagen, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1.5,
    ease: "easeOut"
  }}
                className="trabajos-carrousel"
                key={imagen}
              >
                <img
                  src={imagen}
                  alt={`${proyecto.nombre} - imagen ${i + 1}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div
            className={`trabajos-info-container ${
              index % 2 !== 0 ? "trabajos-invertido" : ""
            }`}
          >
            <div className="trabajos-info-subcontainer">
              <h3 className="trabajo-title">
                {proyecto.nombre}
              </h3>

              <p className="trabajo-description">
                {proyecto.descripcion}
              </p>

              <span className="trabajo-button">
                Ver proyecto <span aria-hidden="true"> → </span>
              </span>
            </div>

            <div className="trabajos-number-container">
              <p className="trabajos-number">
                {proyecto.numero}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

export default Trabajos;
