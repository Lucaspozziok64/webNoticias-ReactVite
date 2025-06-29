const ListaNoticia = ({ noticia }) => {
  return (
    <div className="card p-1 mx-2">
      <img
        src={noticia.image_url}
        className="card-img-top"
        alt={noticia.source_name}
      />
      <div className="card-body p-1">
        <h6 className="card-title">{noticia.title}</h6>
        <p className="card-text truncate-3-lines">
          {(noticia.description)}
        </p>
        <div className="d-flex flex-column mb-0">
          <span>
            Pais: <strong>{noticia.country}</strong>
          </span>
          <span>
            Categoria: <strong>{noticia.category}</strong>
          </span>
        </div>
      </div>
      <div className="card-footer">
        <button className="botonVerNoticia text-white">Ver noticia completa</button>
      </div>
    </div>
  );
};

export default ListaNoticia;
