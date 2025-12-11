# CURSO DE REDUX 

 *Redux para gestionar el estado global*

## Instalación
`
```bash
  npm i redux react-redux
  pnpm add redux react-redux
```

## Configuración 


### ¿Cómo estructurar las acciones de Redux?
- Una vez instaladas las librerías, es momento de estructurar las acciones:

- Crear el directorio de actions: Dentro de la carpeta source, genera una carpeta llamada actions.
Definir los tipos de acciones: Es recomendable usar constantes para exportar los tipos (types) de acciones. Esto previene errores tipográficos. Por ejemplo:

/actions/Types.js
```js
export const SET_POKEMONS = "SET_POKEMONS";
```

- Crear los action creators: Los action creators son funciones que retornan un objeto action.

/actions/index.js
```js
import { SET_POKEMONS } from './types';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
```

### ¿Cómo crear un reducer en Redux?

- Los reducers son funciones puras que determinan cómo cambia el estado en respuesta a una acción.

/reducers/pokemon.js
```js
import { SET_POKEMONS } from '../actions/types'

// Definir el estado inicial: Usar un objeto clave-valor.
const initialState = {
  pokemons: [],
};

// Crear el reducer: Usa una función switch para manejar diferentes tipos de acciones.
export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }
    default:
      return state;
  }
}
```

### ¿Cómo integrar el Store de Redux en React?

main.jsx
```jsx
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
```

### ¿Por qué usar Redux?
Redux proporciona un manejo del estado centralizado, ayudando a desarrollar aplicaciones más predecibles, fáciles de depurar y probar. Si bien este tutorial cubre lo esencial, recuerda que Redux tiene otras formas, como el **Redux Toolkit**, que la documentación oficial recomeinda usar.