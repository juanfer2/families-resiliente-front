import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionals } from '../../flux/actions/professional.action'



import { useHome } from './useHome'


function Home() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    const startProfessionalsDispacht = () => dispatch(getProfessionals())
    startProfessionalsDispacht()
  }, [])
  console.log(state)

  return (
    <div>
      <h1>HOME Rsjx</h1>
    </div>
  )
}

export default Home
