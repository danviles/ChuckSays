import ChuckContenedor from './Components/Chuck/ChuckContenedor'
import ListaFrases from './Components/Lista/ListaFrases'
import ChuckState from './Context/ChuckApi/ChuckState'


function App() {

  return (

    <ChuckState>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ChuckContenedor />
          </div>
          <div className="col-sm">
            <ListaFrases />
          </div>
        </div>
      </div>
    </ChuckState>
  )
}

export default App
