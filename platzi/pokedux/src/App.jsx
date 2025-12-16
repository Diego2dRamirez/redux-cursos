import { Col, Spin, Flex } from "antd"
import { Search } from "./components/Search"
import { PokemonList } from "./components/PokemonList"
import logo from './components/statics/logo.svg'
import { useEffect } from "react"
import { getPokemon, getPokemonDetails } from "./components/api"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getPokemonWithDetails, setLoading, setPokemons } from "./components/actions"

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes))
      dispatch(setLoading(false))
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
      {
        loading ?
          <Col offset={12} style={{ marginBlockStart: "2rem" }}>
            <Spin size="large" />
          </Col> :
          <PokemonList pokemons={pokemons} />
      }


    </section>
  )
}

export default App
