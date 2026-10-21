import "./AnnSystems.css";

function AnnSystems() {
  return (
    <section className="systems-sectios">
      <div className="systems-title-container">
        <h2 className="systems-title"> Ann Systems </h2>
      </div>
      <div className="systems-info-container">
        <div className="systems-paragraph-container">
          <div className="systems-paragraph-subcontainer">
            <p className="systems-paragraph">
              {" "}
              Métodos y herramientas para ordenar la comunicación de tu
              marca.{" "}
            </p>
            <div className="systems-paragraph-">
              <div> Vol. 01 · </div>
              <div> De improvisar a planificar. </div>
            </div>
            <p className="systems-paragraph">
              {" "}
              Un workbook y un kit de plantillas para transformar ideas sueltas
              en un plan de contenido con dirección.{" "}
            </p>
            <p className="systems-paragraph">
              {" "}
              Organizá qué comunicar, para qué y cuándo, con herramientas que
              puedas aplicar a tu marca.{" "}
            </p>
          </div>
          <div className="systems-mock-container">
            <span> [ Imagen / mock up del Workbook ] </span>
          </div>
        </div>
        <div className="systems-mail-container">
          <h3 className="systems-mail-title"> PROXIMAMENTE </h3>
          <span className="systems-mail-subtitle">
            {" "}
            Dejanos tu mail para enterarte del lanzamiento.
          </span>
          <div className="systems-mail-input-container">
            <input className="systems-input" placeholder="Ingresá tu mail..." type="email" />
            <button className="systems-mail-button"> Sumarme → </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnnSystems;
