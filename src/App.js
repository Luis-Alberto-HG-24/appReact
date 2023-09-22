import { useReducer } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { FormularioTareas } from './components/FormularioTareas/FormularioTareas'
import { CardTarea } from './components/CardTarea/CardTarea'
import { tareaReducer } from './reducers/tareaReducer'
import { useState } from 'react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const App = () => {

  const MySwal = withReactContent(Swal)
  const [descripcion, setDescripcion] = useState("");    

  const handleInputChange = (evento) =>{
    // console.log(evento.target.value);
    setDescripcion(evento.target.value)
    // console.log(descripcion);
  }


  const handleSubmit = (evento) =>{
    evento.preventDefault();

    if (descripcion != "") {
      
      const tareaNueva = {
        id: new Date().getTime(),
        descripcion: descripcion,
        realizado:false,
      }
      const accion = {
        type: "agregar",
        payload: tareaNueva
      }
      dispatch(accion)
      setDescripcion("")

    } else {
      MySwal.fire(
        'Error',
        'La tarea que deseas agregar esta vacia!',
        'error'
      )
    }

   

  }

  const init = () =>{
    return JSON.parse(localStorage.getItem("tareas")) || []
  }

  const [state, dispatch] = useReducer(tareaReducer, [], init)

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state))
  }, [state])

  const handleCambiar = (id) =>{
    dispatch({
      type: "cambiar",
      payload: id
    })
  }

  const handleEliminar = (id) =>{
    MySwal.fire({
      title: 'Alerta!',
      text: "¿Estas seguro de que deseas eliminar la siguiente tarea?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exito!',
          'La tarea se ha eliminado con exito',
          'success'
        )
        dispatch({
          type: "borrar",
          payload: id
        })  
      }
    })
  }

  let terminadas = 0;
  for (let index = 0; index < state.length; index++) {
    if (state[index].realizado === true) {
      terminadas++;
    }
  }

  let porcentaje;

  if (state.length == 0) {
    porcentaje = 0;
  } else {
    porcentaje = (terminadas/state.length) * 100;
  }



  return (
    <>
        <Header/>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-4 border-end">
              <FormularioTareas descripcion={descripcion} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="col-lg-8">
              <div className="container py-5">
                <div className="row justify-content-lg-evenly justify-content-md-evenly justify-content-center-sm">
                  {
                    state.map((tarea,index) =>{
                      return <CardTarea handleEliminar={handleEliminar} handleCambiar={handleCambiar} key={index} tarea={tarea} id={tarea.id} index={index + 1}/>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer porcentaje={porcentaje}/>
    </>
  )
}
