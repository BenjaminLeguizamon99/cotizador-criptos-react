import {useState, useEffect} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'

const Form = ({setMonedas}) => {
    
    const monedas = [
        {id:'USD', nombre:'Dolar de Estados Unidos'},
        {id:'EUR', nombre:'Euro'},
        {id:'ARS', nombre:'Peso Argentino'},
        {id:'GBP', nombre:'Libra Esterlina'},
    ]

    const [criptos, setCriptos] = useState ([])
    const [error, setError] = useState (false);

    const [moneda, SelectMonedas] = useSelectMonedas('Elige una moneda', monedas);
    const [criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige una criptomoneda', criptos);

    useEffect(() => {
        const llamarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            
            const arrayCripto = resultado.Data.map(crypto => {
                const objeto = {
                    id : crypto.CoinInfo.Name, 
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCripto)
        }

        llamarApi()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({moneda, criptomoneda})
    }


    return (
    <div className='h-90 backdrop-blur-md max-w-screen-md sm:w-3/4 mx-auto mt-12 rounded-2xl'>
        <form 
            className='flex flex-col mb-10 m-w-2/3'
            onSubmit={handleSubmit}    
        >
            {error && <p className='bg-red-600 text-white text-center p-4 text-xl font-semibold uppercase w-2/3 mx-auto mt-7 rounded-md'>Todos los campos son obligatorios!</p>}
            <SelectMonedas />
            <SelectCriptomoneda />       
            <input type='submit' className='w-2/3 rounded-md mx-auto p-2 my-10 bg-cyan-700 hover:bg-cyan-600 hover:cursor-pointer text-gray-300 text-xl font-semibold' value='Cotizar' />
        </form>
    </div>
  )
}

export default Form