import { useReducer } from "react";

const fecha = new Date();
const mes = fecha.getMonth();
const año = fecha.getFullYear();
const valorInicial = {m: mes, a:año}
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const reducer = (estado, accion) => {

    let nuevoMes = estado.m;
    let nuevoAño = estado.a;

    switch (accion.tipo) {
        case "masM":
            nuevoMes = nuevoMes === 11 ? 0 : nuevoMes + 1
            break;
        case "menosM":
            nuevoMes = nuevoMes === 0 ? 11 : nuevoMes - 1
            break;
        case "masA":
            nuevoAño = nuevoAño + 1
            break;
        case "menosA":
            nuevoAño = nuevoAño - 1
            break;
    }
    return {m: nuevoMes, a: nuevoAño}
}

const EjemploUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer, valorInicial);
    
    return ( 
        <div>
            <div style={(estado.m < mes && estado.a <= año) || (estado.a < año) ? {color: "red"} : {color: "green"}}>
                <h1>{meses[estado.m]}, {estado.a}</h1>
            </div>
            <div>
                 Mes:  <button onClick={() => dispatch({tipo:"masM"})}>+</button> <button onClick={() => dispatch({tipo:"menosM"})}>-</button>
                 <br />
                 <br />
                 Año:  <button onClick={() => dispatch({tipo:"masA"})}>+</button> <button onClick={() => dispatch({tipo:"menosA"})}>-</button>
            </div>
        </div>    
    );
}
 
export default EjemploUseReducer;