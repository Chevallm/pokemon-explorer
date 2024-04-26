import { Box, Typography, Paper } from "@mui/material";
import { Pokemon } from "../../types/Pokemon";

type PokemonEvolutionsProps = {
    previousPokemon: Pokemon | undefined;
    nextPokemons: (Pokemon | undefined)[];
    pokemon: Pokemon;
    setPokemonSelected: (pokemonId: number) => void
}

export default function PokemonEvolutions(props: PokemonEvolutionsProps) {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            {(props.previousPokemon || props.nextPokemons.length > 0) && (
                <>
                    <Typography variant="h4">Evolutions</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        {props.previousPokemon && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Previous evolution</Typography>
                                <Paper onClick={() => props.previousPokemon && props.setPokemonSelected(props.previousPokemon.id)} elevation={1} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src={props.previousPokemon.image.thumbnail} />
                                    <Typography sx={{ mt: 1 }}>{props.previousPokemon.name.english} with {props.pokemon.evolution.prev?.[1]}</Typography>
                                </Paper>
                            </Box>
                        )}
                        {props.nextPokemons.length > 0 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Next evolutions</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 2, rowGap: 2, flexWrap: 'wrap' }}>
                                    {props.nextPokemons.filter(p => !!p).map((nextPokemon, evolutionIndex) => {
                                        const pokemonName = nextPokemon?.name.english;
                                        const when = props.pokemon!.evolution.next?.[evolutionIndex][1];
                                        return (
                                            <Paper
                                                key={nextPokemon?.id}
                                                onClick={() => props.setPokemonSelected(nextPokemon!.id)}
                                                elevation={1}
                                                sx={{
                                                    padding: 2,
                                                    flexGrow: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                <img src={nextPokemon?.image.thumbnail} />
                                                <Typography sx={{ mt: 1 }}>{pokemonName} with {when}</Typography>
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
    )
}