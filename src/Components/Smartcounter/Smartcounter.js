import {useState} from 'react';

function SmartCounter() {
    //retorna un vector
    //1- un variable stateful
    //2-una funcion amarrada a la variable que actualiza ese valor.
    // nuestro componente esta Reactivo. <3
    const [quantity, upQuantity] = useState(1);
    return(
        <>
        <h1>{quantity}</h1>
        <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}
export default SmartCounter;