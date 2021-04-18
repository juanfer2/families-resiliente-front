import { BehaviorSubject, from } from 'rxjs'

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  mergeMap,
} from 'rxjs/operators'

import {
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from '../../contants/api.constant'

import {
  ActionPokemonType,
  PokemonState,
} from '../../interfaces/pokemons.interface'

const startGetPokemon = () => {
  return { type: GET_POKEMONS_START }
}

const successGetPokemon = () => {
  return { type: GET_POKEMONS_SUCCESS }
}

const errorGetPokemon = () => {
  return { type: GET_POKEMONS_ERROR }
}

let searchSubject = new BehaviorSubject('')
searchSubject.next(name)

export const getPokemonsActions = () => {
  return (dispatch: any) => {
    try {
      dispatch(startGetPokemon())
    } catch (error) {
      dispatch(errorGetPokemon())
    }
  }
}
