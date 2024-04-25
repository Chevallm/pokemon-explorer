import { pokedexData } from "../pokedex";
import { Pokemon } from "../types/Pokemon";

function isString(value: number | string): value is string {
    return typeof value === 'string';
}

export function getPokemon(pokemonId: number | string): Pokemon | undefined {
    if (isString(pokemonId)) {
        pokemonId = parseInt(pokemonId);
    }
    return pokedexData.find(pokemonInPokedex => pokemonInPokedex.id === pokemonId);
}