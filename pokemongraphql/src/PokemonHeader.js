import React from 'react'
import './App.css'

export default function PokemonHeader({pokemonsObj}) {
    
    // const GETPOKEMON_NAME = gql`
    // query pokemons($first: Int!){
    //     pokemons(first: $first){
    //         id
    //         name
    //     }
    // }`
    
    // const {error, loading, data : { pokemons = [] } = {} } = useQuery(GETPOKEMON_NAME, {
    //     variables:{first: 100},
    // });

    // function handleSubmit (e){
    //     e.preventDefault()
    //     getPokemonName(e.target.value)
    // }
    const pokemonsName = [...pokemonsObj]
        
    return (
        
        <div>
           <form >
                <select className="select" onChange ={(e) => console.log(e.target.value)}>
                    { pokemonsName && pokemonsName.map(pName => 
                         <option  key = {pName.id} value = {pName.name}>{pName.name}</option>
                        )
                    }
                </select>
            </form>
        </div>
    
    )
}
