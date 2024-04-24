import { Fab } from "@mui/material"
import { Pokemon } from "../types/Pokemon"
import { ArrowBack } from "@mui/icons-material"
import { pokedexData } from "../pokedex"

type PokemonInfoComponentProps = {
    pokemonSelected: string,
    onGoBack: () => void
}
export default function PokemonInfoComponent(props: PokemonInfoComponentProps) {

    const fabStyle = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 75,
        left: 'auto',
        position: 'fixed'
    }
    const pokemonSelectedId = parseInt(props.pokemonSelected, 10);
    const pokemon = pokedexData.find(pokemonInPokedex => pokemonInPokedex.id === pokemonSelectedId)
    if (pokemon === undefined) {
        throw new Error(`Pokemon #${pokemonSelectedId} does not exist.`);
    }
    const previousPokemonId = pokemon.evolution.prev ? parseInt(pokemon.evolution.prev[0]) : null;
    const nextPokemonsIds = (pokemon.evolution.next ?? []).map(nextEvo => parseInt(nextEvo[0]));
    let previousPokemon = undefined;
    let nextPokemons: Pokemon[] = [];
    if (previousPokemonId) {
        previousPokemon = pokedexData.find(pokemonInPokedex => pokemonInPokedex.id === previousPokemonId)
    }
    if (nextPokemonsIds.length > 0) {
        nextPokemons = nextPokemonsIds.map(nextPokemonId =>
            pokedexData.find(pokemonInPokedex => pokemonInPokedex.id === nextPokemonId)
        )
    }

    return (
        <>
            <section>
                <div></div>
                <img src={pokemon.image.hires}></img>
                <p>{pokemon.name.english}</p>
                <p>prev: {previousPokemon?.name.english}</p>
                <p>next: {nextPokemons.map(nextPokemon => (<span>{nextPokemon.name.english}</span>))}</p>
            </section>
            
            <Fab
                onClick={props.onGoBack}
                style={fabStyle}
                color="primary"
                aria-label="back">
                <ArrowBack></ArrowBack>
            </Fab>
        </>
    )

}