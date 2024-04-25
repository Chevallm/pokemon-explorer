import { useState } from 'react'
import { Pokedex } from '../types/Pokedex'
import PokemonComponent from './Pokemon'
import {pokedexData} from '../pokedex'
import { Box } from '@mui/material'

type PokedexComponentProps = {
    onPokemonSelected: (pokemonSelected: string) => void,
    filteredPokedex: Pokedex
}
export default function PokedexComponent(props: PokedexComponentProps) {

    const [pokedex] = useState<Pokedex>(pokedexData)

    function onPokemonSelected(pokemonSelected: string) {
        props.onPokemonSelected(pokemonSelected)
    }

    return (
        <>
        <Box className="flex flex-wrap flex-row gap-3 place-content-center">
        {(props.filteredPokedex.length > 0 ? props.filteredPokedex : pokedex).map(pokemon =>
            <Box className='w-1/4' key={pokemon.id}>
                <PokemonComponent pokemon={pokemon} onPokemonSelected={onPokemonSelected}></PokemonComponent>
            </Box>      
        )}
        </Box>
            
        </>
    )
}