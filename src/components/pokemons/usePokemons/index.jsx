import { useState, useEffect } from 'react'
import { getPokemons } from '../../../services/pokemons/pokemons.service'
import { BehaviorSubject, from } from 'rxjs'

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  mergeMap,
} from 'rxjs/operators'

export const usePokemons = (name) => {
  const [state, setState] = useState({
    pokemons: [],
    loanding: false,
    errorPokemons: null,
  })

  let searchSubject = new BehaviorSubject('')
  searchSubject.next(name)

  const getPokemonsData = async (pokeName) => {
    try {
      const data = await getPokemons()
      const allPokemons = data.results.filter((pokemon) =>
        pokemon.name.includes(pokeName),
      )
      return allPokemons
    } catch (error) {
      return error
    }
  }

  let searchSubjectObservable = searchSubject.pipe(
    filter((val) => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap((val) => from(getPokemonsData(val))),
  )

  const useObservable = (observable, setter) => {
    useEffect(() => {
      try {
        let subscription = observable.subscribe((result) => {
          setter({ pokemons: result, loanding: false })
        })
        return () => subscription.unsubscribe()
      } catch (error) {
        setter({ errorPokemons: error, loanding: false })
      }
    }, [name])
  }

  useObservable(searchSubjectObservable, setState)
  return state
}
