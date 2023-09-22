export const tareaReducer = (state = [], accion) =>{

    switch (accion.type) {

        case "agregar":
            return [...state,accion.payload];
            break;

        case "borrar":
            return state.filter((tarea)=> tarea.id !== accion.payload)
            break;

        case "cambiar":
            return state.map((tarea) => tarea.id === accion.payload ? {...tarea, realizado: !tarea.realizado} : tarea ) 
            break;

        default:
            return state;
            break;
    }

}