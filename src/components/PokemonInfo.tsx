import { Box, Fab, Paper, Typography } from "@mui/material"
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
    let nextPokemons: (Pokemon | undefined)[] = [];
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
            <Box>
                <Paper elevation={2} sx={{mx: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {/* Identity */}
                        <img src={pokemon.image.hires} height="400" width="400"/>
                        <Typography>{pokemon.name.english}</Typography>
                        <Box sx={{display: 'flex', columnGap: 5}}>
                            <Typography>🇫🇷 {pokemon.name.french}</Typography>
                            <Typography>🇯🇵 {pokemon.name.japanese}</Typography>
                            <Typography>🇨🇳 {pokemon.name.chinese}</Typography>
                        </Box>
                    
                    <p>prev: {previousPokemon?.name.english}</p>
                    <p>next: {nextPokemons.map(nextPokemon => (<span>{nextPokemon?.name.english}</span>))}</p>
                </Paper>
            </Box>
            
            
            <Fab
                onClick={props.onGoBack}
                style={fabStyle}
                color="primary"
                aria-label="back">
                <ArrowBack/>
            </Fab>
        </>
    )

}