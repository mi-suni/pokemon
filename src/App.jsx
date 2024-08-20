import './App.css'
import {Route, Routes, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Main from './components/Main'
import Detail from './components/Detail' 
import Favorite from './components/Favorite'
import Search from './components/Search'
import { useState } from 'react'

const DivContainer = styled.div`
  max-width: 90.06rem;
  min-width: 90.06rem;
  height: 900px;
  margin: 0 auto;
  background-color: #557c9f;
  position: relative;
  box-sizing: border-box;
`

const HeaderContainer = styled.header`
  max-width: 90.06rem;
  min-width: 90.06rem;
  height: 150px;
  padding: 0;
  margin: 0;
  background-color: #644f4f;
  position: fixed;
  z-index: 2;
  box-sizing: border-box;

`
const H1 = styled.h1`
  text-align: center;
  padding: 0;
  margin: 0 auto;
`

function App() {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  return (
    <DivContainer>
      <HeaderContainer>
        <H1 onClick={() => navigate('/')}>Pokemon 도감</H1>
        <input value={inputValue} onChange={(e) => {
          if(inputValue === null) return navigate('/');
          setInputValue(e.target.value)
          navigate(`/search?pokemon=${e.target.value}`)
          }} />
      </HeaderContainer>

      <Routes>
        <Route path = '/' element = {<Main />} />
        <Route path = '/detail/:id' element = {<Detail />} />
        <Route path = '/favorite' element = {<Favorite />} />
        <Route path = '/search' element = {<Search />} />
      </Routes>
    </DivContainer>
  )
}

export default App
