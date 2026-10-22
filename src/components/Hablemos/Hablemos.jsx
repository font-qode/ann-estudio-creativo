import './Hablemos.css';

function Hablemos() {

    return (
        <section className='hablemos-section'>
            <div className='hablemos-title-container'>
                <h2 className='hablemos-title'> Hablemos </h2>
            </div>
            <div className='hablemos-subtitles-container'>
                <span className='subtitle1'> Tu próximo proyecto empieza con una conversación. </span>
                <span className='subtitle2'> ¿Tenés una idea o una marca que querés hacer crecer? Contanos qué necesitás y vemos cómo llevarlo adelante. </span>
            </div>
            <div className='hablemos-info-container'>
                <div className='hablemos-form-container'>
                    <h3 className='hablemos-form-title'> Formulario </h3>
                    <form className='hablemos-form' action="">
                        <input className='hablemos-form-input' placeholder='Nombre' type="text" />
                        <input className='hablemos-form-input' placeholder='Marca o proyecto' type="text" />
                        <input className='hablemos-form-input' placeholder='Email' type="email" />
                        <input className='hablemos-form-input' placeholder='servicio que te interesa' type="text" />
                        <input className='hablemos-form-input' placeholder='Contanos brevemente que necesitas' type="text" />
                    </form>
                    <button className='hablemos-form-button'> ENVIAR </button>
                </div>
                <div className='hablemos-redes-container'>
                    <h3 className='hablemos-redes-title'> Preferís escribirnos directamente? </h3>
                    <button className='hablemos-whatsapp-button'> WHATSAPP </button>
                    <button className='hablemos-redes-button'> MAIL </button>
                    <button className='hablemos-redes-button'> INSTAGRAM </button>
                </div>
            </div>
        </section>
    )
}

export default Hablemos;