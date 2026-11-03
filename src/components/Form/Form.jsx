import { useState } from "react";
import { motion } from "motion/react";

// Reemplazá esta URL por tu endpoint de Formspree
const FORM_ENDPOINT = "https://formspree.io/f/mwllnojp";

function Form() {
  const [estado, setEstado] = useState("idle");

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    const form = e.currentTarget;
    const datos = new FormData(form);

    try {
      const respuesta = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: datos,
        headers: {
          Accept: "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo enviar");
      }

      form.reset();
      setEstado("enviado");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
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
      className="hablemos-form-container"
    >
      <h3 className="hablemos-form-title">
        Formulario
      </h3>

      <form
        className="hablemos-form"
        onSubmit={enviarFormulario}
      >
        <input
          className="hablemos-form-input"
          placeholder="Nombre"
          aria-label="Nombre"
          name="nombre"
          type="text"
          required
        />

        <input
          className="hablemos-form-input"
          placeholder="Marca o proyecto"
          aria-label="Marca o proyecto"
          name="marca"
          type="text"
          required
        />

        <input
          className="hablemos-form-input"
          placeholder="Email"
          aria-label="Email"
          name="email"
          type="email"
          required
        />

        <input
          className="hablemos-form-input"
          placeholder="Servicio que te interesa"
          aria-label="Servicio que te interesa"
          name="servicio"
          type="text"
          required
        />

        <textarea
          className="hablemos-form-input"
          placeholder="Contanos qué necesitás"
          aria-label="Contanos qué necesitás"
          name="mensaje"
          rows="4"
          required
        />

        <button
          className="hablemos-form-button"
          type="submit"
          disabled={estado === "enviando"}
        >
          {estado === "enviando" ? "ENVIANDO..." : "ENVIAR"}
        </button>

        <div role="status" aria-live="polite">
          {estado === "enviado" && (
            <p className="form-success">
              ¡Gracias! Tu mensaje fue enviado correctamente.
            </p>
          )}

          {estado === "error" && (
            <p className="form-error">
              No pudimos enviar tu mensaje. Intentá nuevamente.
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
}

export default Form;
