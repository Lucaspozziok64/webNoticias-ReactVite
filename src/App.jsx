import './App.css'
import Formulario from './components/Formulario'
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
      </main>
    </>
  )
}

export default App
