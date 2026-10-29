import "./AnnSystems.css";
import { motion } from "motion/react";

function AnnSystems() {
  return (
    <section id="systems" className="systems-sections">
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className="systems-title-container">
        <h2 className="systems-title"> Ann Systems </h2>
      </motion.div>
      <div className="systems-info-container">
        <div className="systems-paragraph-container">
          <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className="systems-paragraph-subcontainer">
            <p className="systems-paragraph">
              {" "}
              Métodos y herramientas para ordenar la comunicación de tu
              marca.{" "}
            </p>
            <div className="systems-volume-container">
              <span className="systems-volume">VOL. 01 ·</span>

              <h3 className="systems-volume-title">
                De improvisar
                <span className="systems-script">a planificar.</span>
              </h3>
            </div>
            <p className="systems-paragraph">
              {" "}
              Un workbook y un kit de plantillas para transformar ideas sueltas
              en un plan de contenido con dirección.{" "}
            </p>
            <p className="systems-paragraph">
              {" "}
              Organizá qué comunicar, para qué y cuándo, con herramientas que
              puedas aplicar a tu marca.{" "}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }} className="systems-mock-container">
            <img className="img-mock" src="/mockAnnSystems.png" alt="Imagen Mock Up" />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className="systems-mail-container">
          <h3 className="systems-mail-title"> PROXIMAMENTE </h3>
          <span className="systems-mail-subtitle">
            {" "}
            Dejanos tu mail para enterarte del lanzamiento.
          </span>
          <div className="systems-mail-input-container">
            <input className="systems-input" placeholder="Ingresá tu mail..." type="email" />
            <button className="systems-mail-button"> Sumarme → </button>
          </div>
      </motion.div>
        </div>
    </section>
  );
}

export default AnnSystems;
