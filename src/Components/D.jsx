import React, { useContext } from 'react'
import { globaldata } from './A'

const D = () => {
    const mydata = useContext(globaldata)
  return (
    <>
    <h1>Component D</h1>
    <p>Data Come from A : <span style={{color:"red"}}>{mydata}</span></p>
    </>
  )
}

export default D