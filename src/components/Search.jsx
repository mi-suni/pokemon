import styled from "styled-components";
import { usePokemon } from "../context/pokemonContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRegExp } from 'korean-regexp'

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

const Search = () => {
  const {pokemonData, setPokemonData} = usePokemon()
  const [searchParams] = useSearchParams()
  const param = searchParams.get('pokemon')
  const reg = getRegExp(param)
  const navigate = useNavigate()

  const filterData = pokemonData.filter((el) => el.korea_name.match(reg))
  console.log(filterData)

  return (
    <>
      <Ul>
        {filterData.map((pokemon) => (
          <Li key={pokemon.id}>
            <Img src={pokemon.sprites.front_default} alt={pokemon.korea_name} />
            <P onClick={() => navigate(`/detail/${pokemon.id}`)}>{pokemon.korea_name}</P>
            <input type="checkbox" />
            </Li>  
          ))}
      </Ul>
    </>
  )
}

export default Search;