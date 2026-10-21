import './Trabajos.css';

function Trabajos() {

    return (
        <section className='trabajos-section'>
            <div className='trabajos-title-container'>
                <h2 className='trabajos-title'>Trabajos</h2>
            </div>

            <div className='trabajos-subtitles-container'>
                <div className='subtitle1-container'>
                    <p className='subtitle1'> Nuestra mirada, en acción. </p>
                </div>
                <div className='subtitle2-container'>
                    <p className='subtitle2'> Una selección de proyectos de comunicación, campañas y producciones.</p>
                </div>
            </div>

            <div className='trabajos-info-carrousel-container'>
                <div className='trabajos-carrousel-container'>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                </div>
                <div className='trabajos-info-container'>
                    <div className='trabajos-info-subcontainer'>
                        <h3 className='trabajo-title'> Marca uno </h3>
                        <p className='trabajo-description'> Social Media · Producción </p>
                        <button className='trabajo-button'> Ver proyecto → </button>
                    </div>
                    <div className='trabajos-number-container'>
                        <p className='trabajos-number'> 01 </p> 
                    </div>
                </div>
            </div>

            <div className='trabajos-info-carrousel-container'>
                <div className='trabajos-carrousel-container'>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                </div>
                <div className='trabajos-info-container'>
                    <div className='trabajos-number-container'>
                        <p className='trabajos-number'> 02 </p> 
                    </div>
                    <div className='trabajos-info-subcontainer'>
                        <h3 className='trabajo-title'> Marca uno </h3>
                        <p className='trabajo-description'> Social Media · Producción </p>
                        <button className='trabajo-button'> Ver proyecto → </button>
                    </div>
                </div>
            </div>

            <div className='trabajos-info-carrousel-container'>
                <div className='trabajos-carrousel-container'>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                    <p className='trabajos-carrousel'> [ IMAGEN ] </p>
                </div>
                <div className='trabajos-info-container'>
                    <div className='trabajos-info-subcontainer'>
                        <h3 className='trabajo-title'> Marca uno </h3>
                        <p className='trabajo-description'> Social Media · Producción </p>
                        <button className='trabajo-button'> Ver proyecto → </button>
                    </div>
                    <div className='trabajos-number-container'>
                        <p className='trabajos-number'> 03 </p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trabajos;