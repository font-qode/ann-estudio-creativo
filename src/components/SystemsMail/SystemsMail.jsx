
import { useState } from "react";
import { motion } from "motion/react";

// Endpoint del formulario de ANN Systems
const SYSTEMS_ENDPOINT = "https://formspree.io/f/moeenwdr";

function SystemsMail() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("idle");

  const enviarEmail = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    try {
      const respuesta = await fetch(SYSTEMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          origen: "Lista de espera ANN Systems",
        }),
      });

      if (!respuesta.ok) {
        throw new Error("Error al registrar el email");
      }

      setEmail("");
      setEstado("enviado");
    } catch (error) {
      console.error("Error:", error);
      setEstado("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="systems-mail-container"
    >
      <h3 className="systems-mail-title">
        PROXIMAMENTE
      </h3>

      <span className="systems-mail-subtitle">
        Dejanos tu mail para enterarte del lanzamiento.
      </span>

      <form
        className="systems-mail-input-container"
        onSubmit={enviarEmail}
      >
        <input
          className="systems-input"
          placeholder="Ingresá tu mail..."
          aria-label="Correo electrónico"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (estado !== "idle") setEstado("idle");
          }}
          required
        />

        <button
          type="submit"
          className="enlace-servicios"
          disabled={estado === "enviando"}
        >
          {estado === "enviando" ? "Enviando..." : "Sumarme"}
          <span aria-hidden="true"> → </span>
        </button>
      </form>

      <div role="status" aria-live="polite">
        {estado === "enviado" && (
          <p className="systems-success">
            ¡Listo! Te avisaremos cuando lancemos ANN Systems.
          </p>
        )}

        {estado === "error" && (
          <p className="systems-error">
            No pudimos registrar tu correo. Intentá nuevamente.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default SystemsMail;
