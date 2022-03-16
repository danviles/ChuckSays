import React, { useContext } from 'react'
import ChuckArea from '../../img/ChuckTextArea.png'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'
import Formulario from '../Formulario/Formulario'
import swal from 'sweetalert';


const ChuckContenedor = () => {

  const chuckContext = useContext(ChuckContext);
  const { fraseactual, agregarFrase } = chuckContext

  const agregar = (e) => {
    e.preventDefault();
    if (fraseactual) {
      agregarFrase(fraseactual);
      swal({
        title: "Good job!",
        text: "The phrase has been SAVED successfully",
        icon: "success",
        timer: 2000
      });
    }
  }

  return (
    <div className='container mt-2'>
      <div className="chuck-img-div">
        <img className='chuck-img' src={ChuckArea} alt="" />
      </div>
      <div className='chuck-container '>
        <div className="container ">
          <blockquote cite=''>
            {fraseactual}
          </blockquote>
        {fraseactual ? <button className='btn btn-success aling-right-button' onClick={agregar}>Add</button> : null}
        </div>
      </div>
      <Formulario />
    </div>
  )
}

export default ChuckContenedor