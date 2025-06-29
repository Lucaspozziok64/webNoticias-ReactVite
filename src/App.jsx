import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import ListaNoticia from "./components/ListaNoticia";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function App() {
  const [noticia, setNoticia] = useState([]);
  const [categoria, setCategoria] = useState('sports')
  const [mostrarSpinner, setMostrarSpinner] = useState(true)

  useEffect(() => {
    obtenerNoticia();
  }, [categoria]);

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_b742216246274da4ae193b631437828d&category=${categoria}&language=es`
      );
      console.log(respuesta);
      const datos = await respuesta.json()
      setNoticia(datos.results || [])
      setMostrarSpinner(false)
    } catch (error) {
      console.log('Eror al obtener noticias')
    }
  };

  return (
    <>
      <main className="container my-5">
        <Titulo />
        <section className="container">
          <Formulario setCategoria={setCategoria} setMostrarSpinner={setMostrarSpinner} />
        </section>
        {mostrarSpinner ? ( 
          <div className="my-3 d-flex justify-content-center">
            <Spinner animation="grow" variant="ligth" />
          </div>
        ) : <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {noticia.map((noticia, index)=> (
            <ListaNoticia key={index} noticia={noticia} />
          ))}
        </div>}
      </main>
    </>
  );
}

export default App;
