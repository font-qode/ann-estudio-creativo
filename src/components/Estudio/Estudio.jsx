import "./Estudio.css";
import { motion } from "motion/react";

function Estudio() {
  return (
    <section id="estudio" className="studio-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="studio-title-container"
      >
        <h2 className="studio-title-first-part"> El </h2>
        <h2 className="studio-title-second-part"> Estudio </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="studio-info-container"
      >
        <div className="studio-subtitle-container">
          <p className="studio-subtitle">
            Una mirada que <span className="studio-script">conecta</span> todo.
          </p>
        </div>
        <div className="studio-first-paragraph-container">
          <h3 className="studio-first-paragraph">
            {" "}
            En ANN Estudio Creativo acompañamos a marcas a verse y comunicarse
            con intención.{" "}
          </h3>
        </div>
        <div className="studio-second-paragraph-container">
          <p className="studio-description">
            Combinamos estrategia digital, producción de moda y dirección
            creativa para que cada foto, cada campaña y cada publicación cuenten
            lo mismo:{" "}
            <span className="studio-script-secondary">quién es tu marca.</span>
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: "easeOut",
        }} className="studio-line-container">
            <div className="studio-line"></div>
            <div className="studio-line1"></div>
      </motion.div>
    </section>
  );
}

export default Estudio;
