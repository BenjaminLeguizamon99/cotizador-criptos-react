import React from 'react'

const Resultado = ({resultado, setMonedas}) => {
    const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE, IMAGEURL, CHANGEPCT24HOUR} = resultado;
    
    const hacerOtraConsulta = () => {
        setMonedas({})
    }
    return (
    <div className='h-90 backdrop-blur-md w-1/2 mx-auto mt-12 rounded-2xl pb-10'>
        <div className='flex justify-center'>
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt='Logo cripto' className='w-40' />
        </div>
        <h3 className='text-white text-center text-xl p-4 font-semibold'>Precio actual: {PRICE}</h3>
        <h3 className='text-white text-center text-xl p-4 font-semibold'>Precio más alto del dia: {HIGHDAY}</h3>
        <h3 className='text-white text-center text-xl p-4 font-semibold'>Precio más bajo del dia: {LOWDAY}</h3>
        <h3 className='text-white text-center text-xl p-4 font-semibold'>Variación en las últimas 24hs: {CHANGEPCT24HOUR}%</h3>
        <h3 className='text-white text-center text-xl p-4 font-semibold'>Última actualización: {LASTUPDATE}</h3>
        <div className='flex justify-center'>
            <input type='submit' className='w-2/3 rounded-md p-2 my-5 bg-cyan-700 hover:bg-cyan-600 hover:cursor-pointer text-gray-300 text-xl font-semibold' value='Hacer otra consulta' onClick={hacerOtraConsulta} />
        </div>
        
    </div>
  )
}

export default Resultado