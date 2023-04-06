import React, { createContext, useState } from 'react'
import B from './B'


export const globaldata = createContext();
const A = () => {
    const [data, setdata] = useState('')
  return (
    <>
    <h1>Component A</h1>
    <label>Write Data for D : </label>
    <input type='text' onChange={(e)=>setdata(e.target.value)} value={data} placeholder=''></input>
    <globaldata.Provider value={data}>
    <B/>
    </globaldata.Provider>
   
    </>
  )
}

export default A