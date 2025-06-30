const imagen1 =
  "https://i.ytimg.com/vi/GjbLS0Jzn-g/maxresdefault.jpg";

const imagen2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tJ9AFmzXMGkEUALSW433QXhAZQdh5U31fg&s';

const CarouselNoticias = ({ imagen3 }) => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={imagen1} className="d-block w-100 imagenCarousel" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={imagen2} className="d-block w-100 imagenCarousel" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={imagen3} className="d-block w-100 imagenCarousel" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselNoticias;
