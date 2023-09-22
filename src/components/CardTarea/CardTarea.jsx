import { useState } from "react"

export const CardTarea = ({tarea,index,handleCambiar,handleEliminar,id}) => {

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-3 text-center">
                <div className={tarea.realizado ? "card bg-success text-white" : "card bg-light"} style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title my-4">Tarea {index}</h5>
                        <p className="card-text mb-4">{tarea.descripcion}</p>
                        <div className="d-grid mb-2">
                            <button onClick={ () => handleEliminar(id)} type="button" className="btn btn-danger mb-2">Borrar</button>
                            <button onClick={ () => handleCambiar(id)} type="button" className={tarea.realizado ? "btn btn-secondary": "btn btn-success text-white"}>{tarea.realizado ? "Marcar como inconclusa": "Marcar como terminada"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}


// instalar TasksApp