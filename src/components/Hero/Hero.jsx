import './Hero.css';

function Hero() {

    return (
        <section className='hero-section'>
            <div className="hero-info-container">
                <div className='hero-logo-container'></div>
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
                        Contanos tu proyecto
                    </a>
                    <a className='hero-button'>
                        Ver trabajos
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;