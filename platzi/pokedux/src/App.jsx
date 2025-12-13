import { Col } from "antd"
import { Search } from "./components/Search"
import { PokemonList } from "./components/PokemonList"
import logo from './components/statics/logo.svg'
import { useEffect } from "react"
import { getPokemon, getPokemonDetails } from "./components/api"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setPokemons } from "./components/actions"

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
      )
      dispatch(setPokemons(pokemonDetailed))
    }
    fetchPokemons()
  }, [])

  return (
    <section className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons} />

    </section>
  )
}

export default App
