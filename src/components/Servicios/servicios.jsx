import './Servicios.css';
import { motion } from "motion/react";

function Servicios() {

    return (
        <section id='servicios' className='servicio-section'>
            <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='servicio-title-container'>
                <h2 className='servicios-title'> Servicios</h2>
            </motion.div>
            <div className='servicios-container'>

                <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='servicio-container'>
                    <div className='servicio-left-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className="servicio-title">
                                Gestión integral de <span className="servicio-script">redes sociales</span>
                            </h3>
                        </div>
                        <div className='servicio-description-container'>
                            <p className='servicio-description'> Combinamos estrategia digital, producción de moda y dirección creativa para que cada foto, cada campaña y cada publicación cuenten lo mismo: quien es tu marca.</p>
                        </div>
                        <div className='servicio-button-container'>
                            <a href="" className='enlace-servicios'> Ver trabajos → </a>
                        </div>
                    </div>
                    <div className='servicio-number-container'>
                        <span className='servicio-number'> 01 </span>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='servicio-container'>
                    <div className='servicio-number-container'>
                        <span className='servicio-number'> 02 </span>
                    </div>
                    <div className='servicio-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className="servicio-title">
                                Producción de <span className="servicio-script">moda</span>
                            </h3>
                        </div>
                        <div className='servicio-description-container'>
                            <p className='servicio-description'> Combinamos estrategia digital, producción de moda y dirección creativa para que cada foto, cada campaña y cada publicación cuenten lo mismo: quien es tu marca.</p>
                        </div>
                        <div className='servicio-button-container'>
                            <a href="" className='enlace-servicios'> Ver trabajos → </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }} className='servicio-container'>
                    <div className='servicio-left-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className="servicio-title">
                                Dirección <span className="servicio-script">creativa</span>
                            </h3>
                        </div>
                        <div className='servicio-description-container'>
                            <p className='servicio-description'> Combinamos estrategia digital, producción de moda y dirección creativa para que cada foto, cada campaña y cada publicación cuenten lo mismo: quien es tu marca.</p>
                        </div>
                        <div className='servicio-button-container'>
                            <a href="" className='enlace-servicios'> Ver trabajos → </a>
                        </div>
                    </div>
                    <div className='servicio-number-container'>
                        <span className='servicio-number'> 03 </span>
                    </div>
                </motion.div>

                

                
            </div>
        </section>
    )
}

export default Servicios;