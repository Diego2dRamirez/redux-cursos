import React from 'react'
import { PokemonCard } from '../PokemonCard';
import './PokemonList.css'

function PokemonList({ pokemons = Array(10).fill('') }) {
  return (
    <div className='pokemon__list'>
      {
        pokemons.map((pokemon, i) => {
          return <PokemonCard />
        })
      }
    </div>
  )
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(''),
// }

export { PokemonList };