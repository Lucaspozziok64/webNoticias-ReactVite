const ListaNoticia = ({ noticia }) => {
  return (
    <div className="card mx-3">
      <img src={noticia.image_url} className="card-img-top" alt={noticia.source_name} />
      <div className="card-body">
        <h5 className="card-title">{noticia.title}</h5>
        <p className="card-text">
          {noticia.description}
        </p>
        <a href="#" className="btn btn-primary">
          Ver noticias completas
        </a>
      </div>
    </div>
  );
};

export default ListaNoticia;
