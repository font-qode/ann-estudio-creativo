import Header from "../Header/Header";
import { motion } from "motion/react";
import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <Header />
      <div className="hero-info-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="hero-logo-container"
        >
          <img src="/logo.png" className="hero-logo" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
          className="hero-title-container"
        >
          <h2 className="hero-title">Marcas con intención.</h2>
          <h2 className="hero-title">Comunicación con dirección.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            ease: "easeOut",
          }}
          className="hero-subtitle-container"
        >
          <h2 className="hero-subtitle">
            Redes sociales, producción de moda y dirección creativa para marcas.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="hero-buttons-container"
        >
          <a className="hero-button">
            Contanos tu proyecto <span className="span-flecha-hero"> ➝ </span>
          </a>
          <a className="hero-button">
            Ver trabajos <span className="span-flecha-hero"> ➝ </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
