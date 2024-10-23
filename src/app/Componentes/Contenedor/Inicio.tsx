import imagen1 from "../../../assets/img/mango.jpg";
import imagen2 from "../../../assets/img/fresa.jpeg";
import imagen3 from "../../../assets/img/patilla.jpg";

export const Inicio = () => {
    return (
      <>
        <div className="bd-example d-flex justify-content-center" style={{ marginTop: "40px" }}></div>
        <div className="bd-example d-flex justify-content-center">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: "300px" }}>
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={imagen1} alt="Primera diapositiva" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={imagen2} alt="Segunda diapositiva" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={imagen3} alt="Tercera diapositiva" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Próximo</span>
            </a>
          </div>
        </div>

        <div className="bd-example d-flex justify-content-center" style={{ padding: '20px' }}>
  <div className="card-group" style={{ gap: '20px', maxWidth: '800px' }}>
    <div className="card" style={{ marginBottom: '20px', border: '1px solid #ddd' }}>
      <div className="card-body">
        <h5 className="card-title">Mango</h5>
        <p className="card-text">El mango es una fruta...</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
    <div className="card" style={{ marginBottom: '20px', border: '1px solid #ddd' }}>
      <div className="card-body">
        <h5 className="card-title">Fresa</h5>
        <p className="card-text">La fresa es una fruta...</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
    <div className="card" style={{ marginBottom: '20px', border: '1px solid #ddd' }}>
      <div className="card-body">
        <h5 className="card-title">Patilla</h5>
        <p className="card-text">La patilla es una fruta...</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
</div>






        </>
    )
  }



 