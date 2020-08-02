import React, {useState, useEffect } from 'react'
import PokemonContainer from './PokemonContainer'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import {BrowserRouter as Router} from 'react-router-dom'

//import Pokemon from './Pokemon'

export default function App() {
  const [pokemonsObj, setPokemonsObj] = useState([])
  const [name, setName] = useState()
  const [showContainer , setShowContainer] = useState(false)
  
  const GETPOKEMON_NAME = gql`
    query pokemons($first: Int!){
        pokemons(first: $first){
            id
            name
        }
    }`
   const {error, loading, data : { pokemons = [] } = {} } = useQuery(GETPOKEMON_NAME, {
    variables:{first: 1000},
  })
    
    useEffect(() => setPokemonsObj(pokemons),[loading])
  
  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    setShowContainer(true)
  } 

  const pokemonsName = [...pokemonsObj]
  
  return (
    loading ? <div className='loader'/> :
    
    <>
      <div className= "pokemonHeader">
      <p>POKEMON</p>
           <form >
                <select className="select" onChange ={(e) => handleChange(e)}>
                <option  disabled selected >-Select Pokemon-</option>)
                    { pokemonsName && pokemonsName.map(pName => 
                      <option  key = {pName.id} value = {pName.name}>{pName.name}</option>)
                    }
                </select>
            </form>
        </div>
        
        {showContainer ? 
        <Router>
            <PokemonContainer fetchedPokemon = {name}/>
        </Router>
        :''
        }
    </>
  )
}

