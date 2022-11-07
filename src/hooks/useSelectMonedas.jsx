import React from 'react'
import { useState } from 'react'

const useSelectMonedas = (label, opciones) => {

  const  [state, setState] = useState('')

  const SelectMoneda = () => (
    <>
        <label className='text-xl p-5 text-center uppercase text-cyan-500 font-bold'>{label}</label>
        <select 
          className='w-2/3 mx-auto p-3 rounded-md'
          value= {state}
          onChange={e => setState(e.target.value)}
          >
          <option value='' className='text-center sm:w-4/5'>--Seleccione--</option>
          {opciones.map(opcion => (
           <option
            key={opcion.id}
            value={opcion.id}  
            className='text-center'         
           >
            {opcion.nombre}
           </option>

          ))}
        </select>
    </>

  )
  return [state, SelectMoneda]
  
}

export default useSelectMonedas