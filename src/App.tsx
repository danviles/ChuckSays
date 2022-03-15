import { useState } from 'react'
import ChuckContenedor from './Components/Chuck/ChuckContenedor'
import Formulario from './Components/Formulario/Formulario'
import ListaFrases from './Components/Lista/ListaFrases'
import ChuckState from './Context/ChuckApi/ChuckState'


//import TiendaState from './context/tienda/tiendaState';


function App() {

  return (

    <ChuckState>
      <Formulario/>
      <ChuckContenedor/>
      <ListaFrases/>
    </ChuckState>
   
  
  )
}

export default App
