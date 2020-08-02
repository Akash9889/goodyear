import React from 'react'
import './App.css'

export default function Pokemon({pokemon}) {
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>Max HP {pokemon.maxHP}</span>
                <span>Max CP {pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__attacks">
                { pokemon.attacks.special.slice(0,3).map(attack => {
                   return <span key={`${attack.name} ${attack.damage}`}>{attack.name}</span>
                    })}
            </div>
           
        </div>
    )
}
