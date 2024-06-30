import { useReducer } from "react";

const contadorInicial = {contador: 0}

const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case "INCREMENTAR":
            return {contador: estado.contador + 1}
        case "DISMINUIR":
            return {contador: estado.contador - 1}
        case "REINICIAR":
            return {contador: 0}
        default:
            return estado;
    }
}

const UseReducer = () => {

     const [variable, dispatch] = useReducer(reducer,contadorInicial);

    return (
        <>
            <h1>Contador: {variable.contador} </h1>
            <div>
                <button onClick={() => dispatch({tipo:"INCREMENTAR"})}>Incrementar</button>
                <button onClick={() => dispatch({tipo:"DISMINUIR"})}>Disminuir</button>
                <button onClick={() => dispatch({tipo:"REINICIAR"})}>Reinciar</button>
            </div>
        </>

    );
}
 
export default UseReducer;