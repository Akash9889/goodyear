import React from 'react'
import Pokemon from './Pokemon'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './App.css'
import {Switch, Link, Route} from 'react-router-dom'
import DetailedPokemon from './DetailedPokemon'

export default function PokemonContainer(fetchedPokemon) {

    
const GET_POKEMONS = gql`
query pokemons($first: Int!) {
    pokemons(first : $first){
        id
        name
        image
        maxHP
        maxCP
        attacks {
            special {
                name
                damage
            }
        }
    }
}`   

const { error,loading , data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 1000 },
});
    
    
    // const GET_POKEMON = gql`
    // query pokemon($id: String, $name: String ) {
    //     pokemon(id : $id , name : $name){
    //         id
    //         name
    //         image
    //         maxHP
    //         maxCP
    //         attacks{
    //             special{
    //                 name
    //                 damage
    //             }
    //         }
    //     }
    // }`   
    // const name = fetchedPokemon.fetchedPokemon
    
    // const { error,loading,data: { pokemon = [] } = {} } = useQuery(GET_POKEMON, {
    //     variables: { id: "", name:name },
    // });
   
    return (
        <>  
            {loading ? <div className='loader'/> :
            <div className="pokemonContainer">
                {pokemons &&  pokemons.map(pokemon => <Pokemon className='poke' key={pokemon.id} pokemon={pokemon} />)}
            </div>
            } 
                
            {/* { loading ? <div className='loader'/> :
            <div className="pokemonContainer">
                {pokemon &&  <Pokemon  key={pokemon.id} pokemon={pokemon} />}
            </div>
            } */}
                

        </>
    );    
}













