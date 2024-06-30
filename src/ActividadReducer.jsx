import { useReducer, useRef, useState } from "react";

const tipos = {
    aumentar:"aumentar",
    disminuir:"disminuir",
    quitar:"quitar",
    comprar:"comprar"
}

const valorInicial = [];

const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case tipos.aumentar:
            return estado.map((producto) => 
                (accion.payload === producto.id)
                ? {...producto, cantidad: producto.cantidad + 1}
                : producto
            );
        case tipos.disminuir:
            return estado.map((producto) => 
                (accion.payload === producto.id && producto.cantidad > 1)
                ? {...producto, cantidad: producto.cantidad - 1}
                : producto
            )
        case tipos.quitar:
            return estado.filter(producto => accion.payload !== producto.id);
        case tipos.comprar:
            return [...estado, accion.payload];
        
    }
    return estado;
}

const ActividadReducer = () => {
    const [valorInput, setValorInput] = useState("");
    const [productos, dispatch] = useReducer(reducer, valorInicial);
    const inputRef = useRef(null);

    return (
        <>
            <div className="contenedor">
                <label htmlFor="producto"> Producto:</label>
                <input ref={inputRef} value={valorInput} id="producto" type="text" placeholder="Escriba un producto.." onChange={(e) => setValorInput(e.target.value)}/>
                <button onClick={()=>{setValorInput(""); inputRef.current.focus(); dispatch({tipo:tipos.comprar, payload: {id:new Date(), nombre: valorInput, cantidad: 1 }})}} type="submit">Comprar</button>
            </div>
            <div className="productos">
                {productos.map((producto) => (
                    <div className="producto" key={producto.id}>
                        {producto.nombre} ({producto.cantidad})
                        <button onClick={() => dispatch({tipo:tipos.aumentar, payload:producto.id})}>+</button>
                        <button onClick={() => dispatch({tipo:tipos.disminuir, payload:producto.id})}>-</button>
                        <button onClick={() => dispatch({tipo:tipos.quitar, payload:producto.id})}>X</button>
                    </div>
                ))}
            </div>
        </>
        
    );
}
 
export default ActividadReducer;