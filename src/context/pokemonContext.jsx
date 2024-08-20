import { createContext, useContext, useState } from "react";

const pokemonContext = createContext()

export function PokemonProvider({children}) {
  const [pokemonData, setPokemonData] = useState([])

  return (
    <pokemonContext.Provider value={{pokemonData, setPokemonData}}>
      {children}
    </pokemonContext.Provider>
  )
}

export function usePokemon() {
  return (
    useContext(pokemonContext)
  )
}