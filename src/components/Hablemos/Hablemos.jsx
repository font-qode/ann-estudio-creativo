import Form from "../Form/Form";
import "./Hablemos.css";
import { motion } from "motion/react";

function Hablemos() {
  return (
    <section id="contacto" className="hablemos-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="hablemos-title-container"
      >
        <h2 className="hablemos-title"> Hablemos </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="hablemos-subtitles-container"
      >
        <span className="subtitle1">
          {" "}
          Tu próximo proyecto empieza con una conversación.{" "}
        </span>
        <span className="subtitle2">
          {" "}
          ¿Tenés una idea o una marca que querés hacer crecer? Contanos qué
          necesitás y vemos cómo llevarlo adelante.{" "}
        </span>
      </motion.div>
      <div className="hablemos-info-container">
        <Form />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="hablemos-redes-container"
        >
          <h3 className="hablemos-redes-title">
            <span className="titulo-linea">Preferís</span>
            <span className="titulo-linea">escribirnos</span>
            <span className="font-script">directamente?</span>
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5493455286644?text=Hola,%20quisiera%20solicitar%20un%20presupuesto."
            className="hablemos-whatsapp-button"
          >
            {" "}
            WHATSAPP{" "}
          </a>
          <a
            href="mailto:annestudiocreativo@gmail.com"
            className="hablemos-redes-button"
          >
            {" "}
            MAIL{" "}
          </a>
          <a
            href="https://www.instagram.com/ann.estudiocreativo"
            target="_blank"
            rel="noreferrer"
            className="hablemos-redes-button"
          >
            {" "}
            INSTAGRAM{" "}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hablemos;
