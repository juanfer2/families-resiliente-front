import React, { useEffect } from 'react'
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { env } from './contants/api.constant'
import { createMuiTheme } from '@material-ui/core/styles'
/** Actions */
import { healtAction } from './flux/actions/healt.action'

import Navbar from './components/navbar'
import Home from './components/home'
import Pokemons from './components/pokemons'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)
  }, [])
  console.log(state)

  return (
    <div className="App">
      <Home />
      <Pokemons />
    </div>
  )
}

export default App
