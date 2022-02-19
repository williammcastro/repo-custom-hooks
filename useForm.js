//Este hook recibe un objeto "initialState" 
//cada propiedad de ese obj es lo q quiero manipular
//el handleinputchange me sirve para leer el campo q necesito
/*
se puede hacer asi:
    const [formValues, handleInputChange] = useForm( {
        description: ''
    } );

o se puede desestructurar asi:
    const [{ description }, handleInputChange] = useForm( {
        description: ''
    } );

OJO - el description del useForm arriba debe coincidir con el name='description' de abajo
OJO - para q el description muestre es estado, lo debo colocar en el value={ description }
OJO - el handleInputChange de arriba se debe llamar en el onChange de abajo

<input
    type='text'
    name='description'
    className='form-control'
    placeholder='Aprender'
    autoComplete='off'
    value={ description }
    onChange={ handleInputChange }
/>

*/


import { useState } from "react";

export const useForm = ( initialState = {} ) => { //un obj vacio por si no lo envian q no reviente la app

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }
    
    const handleInputChange = ( { target } ) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
        });
    }

    return [values, handleInputChange, reset ];
};
