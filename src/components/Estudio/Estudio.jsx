import './Estudio.css';

function Estudio() {

    return (
        <section id='estudio' className='studio-section'>
            <div className='studio-title-container'>
                    <h2 className='studio-title-first-part'> El </h2>
                    <h2 className='studio-title-second-part'> Estudio </h2>
            </div>
            <div className='studio-info-container'>
                <div className='studio-subtitle-container'>
                    <h3 className='studio-subtitle'> Una mirada que conecta todo. </h3>
                </div>
                <div className='studio-first-paragraph-container'>
                    <h3 className='studio-first-paragraph'> En ANN Estudio Creativo acompañamos a marcas a verse y comunicarse con intención. </h3>
                </div>
                <div className='studio-second-paragraph-container'>
                    <span className='studio-second-paragraph'> Combinamos estrategia digital, producción de moda y dirección creativa para que cada foto, cada campaña y cada publicación cuenten lo mismo: quien es tu marca. </span>
                </div>
            </div>
            <div className='studio-line-container'>
                    <div className='studio-line'></div>
                    <div className='studio-line1'></div>
            </div>
        </section>
    )
}

export default Estudio;