import { useReducer, useRef, useState } from "react";

const valorInicial = [
    {id: 1, nombre: "Limpiar"}
]

const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case "agregar":
            return [...estado, {id: Date.now(), nombre: accion.payload}]
        case "eliminar":
            return estado.filter((tarea) => tarea.id !== accion.payload)
        default:
            return estado
    }
}

const ReducerActividad2 = () => {
    const [tareas, dispatch] = useReducer(reducer, valorInicial);
    const [input, setInput] = useState("");
    const inputRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            null
        } else {
            dispatch({
                tipo: "agregar",
                payload: input
            });
            setInput("");
            inputRef.current.focus();
        }
    }

    const handleEliminar = (id) => {
        dispatch({
            tipo: "eliminar",
            payload: id
        })
    }

    return (
        <>
            
            <div className="contenedor">
                <form className="form"> 
                    <input ref={inputRef} onChange={(e) => {setInput(e.target.value)}} value={input} type="text" />
                    <button onClick={handleSubmit}>Agregar</button>
                </form>
                {tareas.map((tarea) => (
                    <div className="tarea" key={tarea.id}>
                        <p>{tarea.nombre}</p>
                        <button onClick={()=> handleEliminar(tarea.id)}>Borrar</button>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default ReducerActividad2;