import { useState } from "react";

export const FormularioTareas = ({descripcion,handleInputChange,handleSubmit}) => {

  return (
    <>
        <div className="container my-5 p-5">
            <div className="row">
                <div className="col p-5 shadow text-center">
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="fw-light mb-3">Agregar Tarea</div>
                        <hr className="my-2" />
                        <div className="form-floating mt-3 mb-4">
                            <input value={descripcion} onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="tareaInput" placeholder="Descripcion"/>
                            <label htmlFor="tareaInput" className="text-secondary">Descripcion</label>
                        </div>
                        <button type="submit" className="btn btn-dark fw-light">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
