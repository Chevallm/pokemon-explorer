import { Box, Fab, Paper, Typography } from "@mui/material"
import { Pokemon } from "../types/Pokemon"
import { ArrowBack } from "@mui/icons-material"
import { pokedexData } from "../pokedex"
import { getPokemon } from "../utils/pokemon"

type PokemonInfoComponentProps = {
    pokemonSelected: string,
    onGoBack: () => void,
    onPokemonSelected: (pokemonSelectedId: string) => void
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

                    {/* Evolutions */}
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {(previousPokemon || nextPokemons.length > 0) && (
                        <>
                            <Typography>Evolutions</Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                                {previousPokemon && (
                                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <Typography sx={{mb: 2}}>Previous evolution</Typography>
                                        <Paper onClick={() => setPokemonSelected(previousPokemon.id)} elevation={1} sx={{padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                            <img src={previousPokemon.image.thumbnail}/>
                                            <Typography sx={{mt: 1}}>{previousPokemon.name.english} with {pokemon.evolution.prev?.[1]}</Typography>
                                        </Paper>
                                    </Box>
                                )}
                                {nextPokemons.length > 0 && (
                                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <Typography sx={{mb: 2}}>Next evolutions</Typography>
                                        <Box sx={{display: 'flex', justifyContent: 'center', columnGap: 2}}>
                                        {nextPokemons.filter(p => !!p).map((nextPokemon, evolutionIndex) => {
                                                const pokemonName = nextPokemon?.name.english;
                                                const when = pokemon.evolution.next?.[evolutionIndex][1];
                                                return (
                                                    <Paper key={nextPokemon.id} onClick={() => setPokemonSelected(nextPokemon.id)} elevation={1} sx={{padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                        <img src={nextPokemon?.image.thumbnail}/>
                                                        <Typography sx={{mt: 1}}>{pokemonName} with {when}</Typography>
                                                    </Paper>
                                                );
                                        })}
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </>
                    )}
                    </Box>
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