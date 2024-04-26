import { Box, Fab, Paper } from "@mui/material";
import { Pokemon } from "../../types/Pokemon";
import { ArrowBack } from "@mui/icons-material";
import { pokedexData } from "../../pokedex";
import { getPokemon } from "../../utils/pokemon";
import PokemonIdentity from "./PokemonIdentity";
import PokemonEvolutions from "./PokemonEvolutions";
import PokemonStatistics from "./PokemonStatistics";
import PokemonMoves from "./PokemonMoves";


type PokemonInfoComponentProps = {
    pokemonSelected: string,
    onGoBack: () => void,
    onPokemonSelected: (pokemonSelectedId: string) => void
}
export default function PokemonInfoComponent(props: PokemonInfoComponentProps) {

    window.scrollTo(0, 0);

    const pokemonSelectedId = parseInt(props.pokemonSelected, 10);
    const pokemon = pokedexData.find(pokemonInPokedex => pokemonInPokedex.id === pokemonSelectedId);
    if (pokemon === undefined) {
        throw new Error(`Pokemon #${pokemonSelectedId} does not exist.`);
    }
    const previousPokemonId = pokemon.evolution.prev ? parseInt(pokemon.evolution.prev[0]) : null;
    const nextPokemonsIds = (pokemon.evolution.next ?? []).map(nextEvo => parseInt(nextEvo[0]));
    let previousPokemon = undefined;
    let nextPokemons: (Pokemon | undefined)[] = [];
    if (previousPokemonId) {
        previousPokemon = getPokemon(previousPokemonId);
    }
    if (nextPokemonsIds.length > 0) {
        nextPokemons = nextPokemonsIds.map(getPokemon);
    }

    function setPokemonSelected(pokemonSelectedId: number): void {
        props.onPokemonSelected(pokemonSelectedId.toString());
    }

    return (
        <>
            <Box sx={{ p: 4 }}>
                <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    <PokemonIdentity pokemon={pokemon}/>
                    <PokemonEvolutions pokemon={pokemon} previousPokemon={previousPokemon} nextPokemons={nextPokemons} setPokemonSelected={setPokemonSelected}/>

                    <Box sx={{width: '100%', display: 'flex', my: 2, flexDirection: 'column', '@media(min-width: 780px)': { flexDirection: 'row'}}}>
                        <PokemonStatistics pokemon={pokemon}/>
                        <PokemonMoves pokemon={pokemon}/>
                    </Box>

                </Paper>
            </Box>


            <Fab
                onClick={props.onGoBack}
                sx={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 75,
                    left: 'auto',
                    position: 'fixed'
                }}
                color="primary"
                aria-label="back">
                <ArrowBack />
            </Fab>
        </>
    );

}
