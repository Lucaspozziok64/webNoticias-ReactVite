import './App.css'
import Formulario from './components/Formulario'
import ListaNoticia from './components/ListaNoticia'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <main className='container my-5'>
        <Titulo />
        <section>
          <Formulario />
        </section>
        <div className='container my-3  row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
          <ListaNoticia />
        </div>
      </main>
    </>
  )
}

export default App
