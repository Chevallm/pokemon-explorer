import { Box, Typography } from "@mui/material";
import { Pokemon } from "../../types/Pokemon";

type PokemonMovesProps = {
    pokemon: Pokemon
}
export default function PokemonMoves(props: PokemonMovesProps) {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h4">Moves</Typography>
            {props.pokemon.profile.ability.map(ability => 
                <Typography key={props.pokemon.id+ability[0].toLocaleLowerCase()}>{ability[0]}</Typography>
            )}
        </Box>
    )
}