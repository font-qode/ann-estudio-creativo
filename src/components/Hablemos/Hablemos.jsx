import './Hablemos.css';
import { motion } from "motion/react";

function Hablemos() {

    return (
        <section id='contacto' className='hablemos-section'>
            <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='hablemos-title-container'>
                <h2 className='hablemos-title'> Hablemos </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='hablemos-subtitles-container'>
                <span className='subtitle1'> Tu próximo proyecto empieza con una conversación. </span>
                <span className='subtitle2'> ¿Tenés una idea o una marca que querés hacer crecer? Contanos qué necesitás y vemos cómo llevarlo adelante. </span>
            </motion.div>
            <div className='hablemos-info-container'>
                <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='hablemos-form-container'>
                    <h3 className='hablemos-form-title'> Formulario </h3>
                    <form className='hablemos-form' action="">
                        <input className='hablemos-form-input' placeholder='Nombre' type="text" />
                        <input className='hablemos-form-input' placeholder='Marca o proyecto' type="text" />
                        <input className='hablemos-form-input' placeholder='Email' type="email" />
                        <input className='hablemos-form-input' placeholder='Servicio que te interesa' type="text" />
                        <input className='hablemos-form-input' placeholder='Contanos que necesitas' type="text" />
                    </form>
                    <button className='hablemos-form-button'> ENVIAR </button>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}  className='hablemos-redes-container'>
                    <h3 className="hablemos-redes-title">
                        <span className="titulo-linea">Preferís</span>
                        <span className="titulo-linea">escribirnos</span>
                        <span className="font-script">directamente?</span>
                    </h3>
                    <button className='hablemos-whatsapp-button'> WHATSAPP </button>
                    <button className='hablemos-redes-button'> MAIL </button>
                    <button className='hablemos-redes-button'> INSTAGRAM </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hablemos;