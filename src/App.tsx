import { useState } from 'react'
import ChuckContainer from './Components/Chuck/ChuckContainer'
import Formulario from './Components/Formulario/Formulario'
import ChuckState from './Context/ChuckApi/ChuckState'

//import TiendaState from './context/tienda/tiendaState';


function App() {

  return (

    <ChuckState>
      <Formulario/>
      <ChuckContainer/>
    </ChuckState>
   
  
  )
}

export default App
