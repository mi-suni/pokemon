import { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/pokemonContext";

const H1 = styled.h1`
  text-align: center;
  padding: 0;
  margin: 0 auto;
`

const Ul = styled.ul`
  max-width: 90.06rem;
  min-width: 90.06rem;  
  margin-top: 150px;
  padding: 10px 0 0;
  text-align: center;
  background-color: aqua;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
`

const Li = styled.li`
  width: 200px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ivory;
  list-style: none;
`
const Img = styled.img`
  width : 150px;
`

const P = styled.p`
  cursor: pointer;
`

const Main = () => {
  const {pokemonData, setPokemonData} = usePokemon()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 151; i++) {
        const response = await
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const speciesResponse = await
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const koreaName = speciesResponse.data.names.find(name => name.language.name === 'ko')
        const flavorText = speciesResponse.data.flavor_text_entries.find(text => text.language.name === 'ko')
        allPokemonData.push({...response.data, korea_name: koreaName.name, flavor_text: flavorText.flavor_text})
      }
      setPokemonData(allPokemonData)
    }
    fetchData()
  }, [])

  const isLoading = pokemonData.length === 0



  const pokemonList = () => {
    return pokemonData.map((pokemon) => (
      <Li key={pokemon.id}>
        <Img src={pokemon.sprites.front_default} alt={pokemon.korea_name} />
        <P onClick={() => navigate(`/detail/${pokemon.id}`)}>{pokemon.korea_name}</P>
        <input type="checkbox" />
      </Li>
    ))
  }

  return (
    <>
      <Ul>
        {isLoading ? <H1>로딩중...</H1> : pokemonList()}
      </Ul>
    </>
  )
}

export default Main;