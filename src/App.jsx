import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import ListaNoticia from "./components/ListaNoticia";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import CarouselNoticias from "./components/CarouselNoticias";
import imagen3 from './img/imagenBitcoin.png'

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
        `https://newsdata.io/api/1/latest?apikey=&category=${categoria}&language=es`
      );
      const datos = await respuesta.json()
      setNoticia(datos.results || [])
      setMostrarSpinner(false)
    } catch (error) {
      console.log('Eror al obtener noticias')
    }
  };

  return (
    <>
      <main className="container my-4">
        <Titulo />
        <CarouselNoticias className="my-3" imagen3={imagen3} />
        <section className="container my-5">
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
      <footer className="bg-black p-2 text-white text-center">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">Desarrollado por <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a></p>
      </footer>
    </>
  );
}

export default App;
