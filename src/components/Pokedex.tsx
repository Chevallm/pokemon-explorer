import { useState } from 'react'
import { Pokedex } from '../types/Pokedex'
import PokemonComponent from './Pokemon'
import {pokedexData} from '../pokedex'
import { Pokemon } from '../types/Pokemon'

type PokedexComponentProps = {
    onPokemonSelected: (pokemonSelected: string) => void
}
export default function PokedexComponent(props: PokedexComponentProps) {

    const [pokedex] = useState<Pokedex>(pokedexData)

    function onPokemonSelected(pokemonSelected: string) {
        props.onPokemonSelected(pokemonSelected)
    }

    return (
        <>
        <section className="flex flex-wrap flex-row gap-3 place-content-evenly">
        {pokedex.map(pokemon =>
            <div className='w-1/4' key={pokemon.id}>
                <PokemonComponent pokemon={pokemon} onPokemonSelected={onPokemonSelected}></PokemonComponent>
            </div>
                
        )}
        </section>
            
        </>
    )
}