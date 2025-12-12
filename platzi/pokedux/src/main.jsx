import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { pokemonsReducer } from './components/reducers/pokemon.js'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { featuring, logger } from './middlewares/index.js'


const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger,featuring)
)

const store = createStore(pokemonsReducer,
  composedEnhancers
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
