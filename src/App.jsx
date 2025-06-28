import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListaNoticia from './components/ListaNoticia'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [noticia, setNoticia] = useState({})

  useEffect(()=> {
    obtenerNoticia()
  }, [])

  const obtenerNoticia = async () => {
    const respuesta = await fetch('https://newsdata.io/api/1/latest?apikey=pub_139b642c0ab24666a804785d24e7a1c3&q=football')
    console.log(respuesta)
    if(respuesta.status === 200) {
      const datos = await respuesta.json()
      console.log(datos.results[0])
      setNoticia(datos.results[0])
    }
  }

  return (
    <>
      <main className='container my-5'>
        <Titulo />
        <section>
          <Formulario />
        </section>
        <div className='container my-3  row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
          <ListaNoticia noticia={noticia} />
        </div>
      </main>
    </>
  )
}

export default App
