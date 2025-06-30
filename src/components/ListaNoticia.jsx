const ListaNoticia = ({ noticia }) => {
  return (
    <div className="card p-1 mx-3">
      <img
        src={noticia.image_url}
        className="card-img-top"
        alt={noticia.source_name}
      />
      <div className="card-body p-1">
        <h6 className="card-header">{noticia.title}</h6>
        <p className="card-text truncate-3-lines">
          {(noticia.description)}
        </p>
        <div className="d-flex flex-column mb-0">
          <span>
            Pais: <strong>{noticia.country}</strong>
          </span>
          <span>
            Publicacion: <strong>{noticia.pubDate}</strong>
          </span>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a className="botonVerNoticia text-white" href={noticia.link} target="blank" >Ver noticia completa</a>
      </div>
    </div>
  );
};

export default ListaNoticia;
