import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { pokemonsReducer } from './components/reducers/pokemon.js'

const store = createStore(pokemonsReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
