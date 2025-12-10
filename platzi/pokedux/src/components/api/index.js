
export const getPokemon = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
}

// WITH AXIOS 
// export const getPokemon = () => {
//   return axios
//     .get('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then((res) => res.data.results)
//     .catch((err) => console.log(err));
// };