import './Footer.css';
import { motion } from "motion/react";

function Footer() {

    return (
        <section className='section-footer'>
            <motion.div initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}  className='img-footer-container'>
                <img className='img-footer' src="/logo.png" alt="" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}  className='span-footer-container'>
                <span className='span-footer'> © 2026 ANN Estudio Creativo </span>
            </motion.div>
        </section>
    )
}

export default Footer;