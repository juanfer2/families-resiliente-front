import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import { usePokemons } from './usePokemons'
function Pokemons() {
  const [name, setName] = useState('')

  const { pokemons, loanding, errorPokemons } = usePokemons(name)

  return (
    <div>
      <h1>Pokemons</h1>
      <Input
        name="name"
        value={name}
        placeholder="Search pokemon..."
        onChange={(event) => setName(event.target.value)}
      />

      {loanding && <div>Cargando...</div>}

      {pokemons &&
        pokemons.map((pokemon, i) => (
          <div key={i}>
            <h3>{pokemon.name}</h3>
            <img alt={pokemon.name} />
          </div>
        ))}
    </div>
  )
}

export default Pokemons
