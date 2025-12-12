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

## Middleware 

### ¿Qué son los middleware en el contexto de Redux?
Los middleware son piezas de código que se ejecutan entre el disparo de una acción y su llegada al reducer en Redux. Esta técnica, ampliamente utilizada en el manejo de servidores backend, permite realizar diversas tareas esenciales para el desarrollo de aplicaciones:

- **Manejo de Errores:** Puedes integrar logs de errores y enviarlos a servicios como Sentry.
- **Fetch de Datos:** Realiza solicitudes y gestiona datos de manera eficiente.
- **Depuración de Aplicaciones:** Ayuda a depurar el flujo de datos en tu aplicación.

### ¿Cómo funcionan los middleware en Redux?
Para entender los middleware, es crucial recordar algunos conceptos clave de Redux:

- **Store Creator:** Función que crea el Store de Redux.
- **Enhancers:** Funciones de orden superior que toman un Store Creator y devuelven una versión mejorada.
- **Compose:** Utilidad de programación funcional que combina múltiples funciones de manera ordenada.

### Creación de un Middleware Personalizado
La implementación de un middleware personalizado, denominado Logger, se basa en funciones currificadas, donde cada función devuelve otra función:

```js
const logger = store => next => action => {
  console.log('Dispatching action:', action);
  return next(action);
};
```

- La primera función recibe el *store*.
- *next* es llamada cuando el middleware termina su trabajo y pasa la acción al reducer.
- *action* contiene la información de la acción disparada.

### Integración del Middleware en nuestra Aplicación
Para añadir un middleware:

- Importa los middleware y Redux:

```js
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares/index.js'
```

- Usa applyMiddleware para integrarlo:

```js
const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger)
)
```
Este enfoque te permite agregar varios middleware y enhancers, potenciando el Store.

**Implementación avanzada: Manipular acciones con middlewa**re

Modificar acciones antes de que lleguen al reducer puede enriquecer tu aplicación. Imagina que recibimos datos de una API y queremos agregar un Pokémon personalizado:

### Creación del Middleware *Featuring*

```js
const featuring = store => next => action => {
  if (action.type === 'FETCH_POKEMON_SUCCESS') {
    const newPayload = [{ name: 'Eddy' }, ...action.payload];
    const updatedAction = {
      ...action,
      payload: newPayload
    };
    return next(updatedAction);
  }
  return next(action);
};
```

### Aplicación de Múltiples Middleware

```js
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, featuring))
);
```

Con esta práctica, observamos cómo agregar y modificar los datos antes de llegar al reducer, permitiéndonos personalizar la experiencia del usuario.

