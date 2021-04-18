import {
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from '../../../contants/api.constant'

import {
  ActionPokemonType,
  PokemonState,
} from '../../../interfaces/pokemons.interface'

const initialState: PokemonState = {
  pokemons: [],
  loandingPokemons: false,
  errorPokemons: null,
}

export default function (
  state: PokemonState = initialState,
  action: ActionPokemonType,
) {
  switch (action.type) {
    case GET_POKEMONS_START:
      return { ...state, loandingPokemons: true, pokemons: [] }
    case GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.payload, loandingPokemons: false }
    case GET_POKEMONS_ERROR:
      return { ...state, errorPokemons: 'ERROR', loandingPokemons: false }
    default:
      return state
  }
}
