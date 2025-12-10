import { Col } from "antd"
import { Search } from "./components/Search"
import { PokemonList } from "./components/PokemonList"

function App() {
  return (
    <>
      <Col span={8} offset={8}>
        <h1>POKEDUX</h1>
        <Search />
      </Col>
      <PokemonList />

    </>
  )
}

export default App
