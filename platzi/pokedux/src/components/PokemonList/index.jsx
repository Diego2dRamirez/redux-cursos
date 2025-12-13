import React from 'react'
import { PokemonCard } from '../PokemonCard';
import './PokemonList.css'

function PokemonList({ pokemons = Array(10).fill('') }) {

  return (
    <div className='pokemon__list'>
      {
        pokemons.map((pokemon) => {
          return (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.name}
              image={pokemon.sprites.front_default} 
              abilities={pokemon.abilities}
              />
          )
        })
      }
    </div>
  )
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(''),
// }

export { PokemonList };