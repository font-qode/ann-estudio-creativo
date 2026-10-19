import Header from '../Header/Header';
import './Hero.css';

function Hero() {

    return (
        <section className='hero-section'>
            < Header />
            <div className="hero-info-container">
                <div className='hero-logo-container'>
                    <img src="/logo.png" className='hero-logo' alt="" />
                </div>
                <div className='hero-title-container'>
                    <h2 className='hero-title'>
                        Marcas con intención. 
                    </h2>
                    <h2 className='hero-title'>
                        Comunicación con dirección.
                    </h2>
                </div>
                <div className='hero-subtitle-container'>
                    <h2 className='hero-subtitle'>
                        Redes sociales, producción de moda y dirección creativa para marcas.
                    </h2>
                </div>
                <div className='hero-buttons-container'>
                    <a className='hero-button'>
                        Contanos tu proyecto <span className='span-flecha-hero'> ➝ </span>
                    </a>
                    <a className='hero-button'>
                        Ver trabajos <span className='span-flecha-hero'> ➝ </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;