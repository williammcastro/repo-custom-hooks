/*
Descripcion de uso:

para llamarlo se utiliza lo siguiente:
    const { data, loading, error } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    en la variable data, se recibe data, en el cual hay q ver que es lo q viene del fetch para poderlo desestructurar luego
    se puede hacer doble desestructuracion con el data de la siguiente manera, teniendo en cuenta el json q devuelve el api

[
    {
        "quote_id": 1,
        "quote": "I am not in danger, Skyler. I am the danger!",
        "author": "Walter White",
        "series": "Breaking Bad"
    }
]

doble desestructuracion:

    const { data, loading, error } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const { author, quote } = !!data && data[0];

    loading es un bool el cual regresa true mientras se esta cargando y resolviendo el fetch .
    error que es lo q retornaria el try/catch falta implementarlo
*/


import { useEffect, useRef, useState } from "react";




export const useFetch = ( url ) => {
    
    //Debemos usar lo siguiente para prevenir q cuando se desmonte uncomponente y si es llamado, no crasee la app
    const isMounted = useRef(true)//Utilizando el useRef!!!
    useEffect(() => {
      return () => {
        isMounted.current = false;
      }
    }, [])
    


    //aqui se debe hacer el try catch throw error cuando no venga el arg url
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setState( {data:null, loading:true, error:null} )
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if (isMounted){//ejemplo que no da!! no ocurre el error

                    // setTimeout(() => { //para simular el error pero no ocurre!!
    
                        setState({
                            loading: false,
                            error: 'no error en fetch',
                            data: data
                        })
                        
                    // }, 4000);

                }//ejemplo que no da!! no ocurre el error 



            });

        return () => {
        // console.log('useEffect dice: componente desmontado')
        }
    }, [url])
    
    return state; //solo retorno el obj state: la data con el loading y error, no requiero retornar setState, 
}


