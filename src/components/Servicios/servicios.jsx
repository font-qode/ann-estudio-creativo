import './Servicios.css';

function Servicios() {

    return (
        <section id='servicios' className='servicio-section'>
            <div className='servicio-title-container'>
                <h2 className='servicios-title'> Servicios</h2>
            </div>
            <div className='servicios-container'>

                <div className='servicio-container'>
                    <div className='servicio-left-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className='servicio-title'> Servicio 01 </h3>
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
                </div>

                <div className='servicio-container'>
                    <div className='servicio-number-container'>
                        <span className='servicio-number'> 02 </span>
                    </div>
                    <div className='servicio-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className='servicio-title'> Servicio 02 </h3>
                        </div>
                        <div className='servicio-description-container'>
                            <p className='servicio-description'> Combinamos estrategia digital, producción de moda y dirección creativa para que cada foto, cada campaña y cada publicación cuenten lo mismo: quien es tu marca.</p>
                        </div>
                        <div className='servicio-button-container'>
                            <a href="" className='enlace-servicios'> Ver trabajos → </a>
                        </div>
                    </div>
                </div>

                <div className='servicio-container'>
                    <div className='servicio-left-info-container'>
                        <div className='servicio-title-container'>
                            <h3 className='servicio-title'> Servicio 03 </h3>
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
                </div>

                

                
            </div>
        </section>
    )
}

export default Servicios;