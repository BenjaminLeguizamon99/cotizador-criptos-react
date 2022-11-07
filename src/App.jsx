import { useState, useEffect } from 'react'
import Form from './components/Form'
import Resultado from './components/Resultado'
import Footer from './components/Footer'


function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect (() => {
    if(Object.keys(monedas).length > 0) {
      //Llamada a la Api que nos va a devolver el precio de la cripto elegida en la moneda elegida.
      const cotizarCripto = async () => {
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <>
      <div className='bg-[url("./assets/criptos-fondo.jpg")] min-h-full bg-cover bg-center opacity-80'>
        <h1 className='text-center pt-10 font-semibold text-5xl uppercase text-gray-300'>Cotizador de cryptos</h1>
        
        {(Object.keys(monedas).length > 0) ? <Resultado resultado={resultado} setMonedas={setMonedas} /> : <Form setMonedas={setMonedas} />}
        
        <Footer />
      </div>
    </>
  )
}

export default App
