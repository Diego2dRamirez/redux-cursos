import { Col } from "antd"
import { Search } from "./components/Search"
import { PokemonList } from "./components/PokemonList"
import logo from './components/statics/logo.svg'
import { useEffect } from "react"
import { getPokemon } from "./components/api"
import { useState } from "react"

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
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
      <PokemonList pokemons={pokemons}/>

    </section>
  )
}

export default App
