import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePokemon } from "../context/pokemonContext";
import { useEffect } from "react";

const Detail = () => {
  const {pokemonData, setPokemonData} = usePokemon()
  const {id} = useParams()
  const navigate = useNavigate()
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`/datail/${id}`)
  //     setPokemonData(response)
  //   }
  //   fetchData()
  // }, [id])
  // console.log(pokemonData)

  console.log(pokemonData[id-1])

  return (
    <>
      <p>{pokemonData[id-1].korea_name}</p>
      <p>{pokemonData[id-1].flavor_text}</p>
      <input type="checkbox"  />
      <img src={`${pokemonData[id-1].sprites.front_default}`} />
      <img src={`${pokemonData[id-1].sprites.back_default}`} />
    </>
  )
}

export default Detail;