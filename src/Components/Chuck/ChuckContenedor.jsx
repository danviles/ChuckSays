import React, { useContext } from 'react'
import ChuckArea from '../../img/ChuckTextArea.png'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'

const ChuckContenedor = () => {

  const chuckContext = useContext(ChuckContext);
  const { fraseactual, agregarFrase } = chuckContext

  const agregar = (e) => {
    e.preventDefault();
    agregarFrase(fraseactual);
  }

  return (
    <div>
      <img src={ChuckArea} alt="" />
      <p>{fraseactual}</p>
      <button onClick={agregar}>Add</button>
    </div>
  )
}

export default ChuckContenedor