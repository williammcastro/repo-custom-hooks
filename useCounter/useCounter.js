//Descripcion de uso :
/*
Creo una const que de una vez desestructura los valores q tengo dentro, counter e increment.
ojo q deben tener exactamente este mismo nombre, y a useCounter le paso el argumento donde quiero que inicie el contador

    const {counter, increment } = useCounter(1)

AHORA, para llamar el incremento, simplemente llamo la funcion por REFERENCIA nomas!!!
       <button className='btn btn-primary' onClick={increment}>


opcional, si quiero pasar el argumento para decrementar o incrementar, debo hacer 2 cosas:
1. cambiar la funcion increment a:

    const increment = ( factor ) => {
        setCounter  ( counter + factor );
    }

2. llamar la funcion donde la necesito NO POR REFERENCIA, sino de la otra forma 
       <button className='btn btn-primary' onClick={() => increment(2)}>

*/


import { useState } from "react";

export const useCounter = ( initialState = 100 ) => {

    const [counter, setCounter] = useState( initialState ); //inicial = 10

    const increment = (  ) => {
        setCounter  ( counter + 1 );
    }

    const decrement = (  ) => {
        setCounter  ( counter - 1 );
    }

    const reset = () => {
        setCounter  ( initialState );
    }

    // console.log('este es counter en useCounter:', counter);
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
};
