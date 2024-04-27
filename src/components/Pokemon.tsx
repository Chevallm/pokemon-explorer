import { Box, Card, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon"
import Type from "./Type";

type PokemonComponentProps = {
    pokemon: Pokemon,
    onPokemonSelected: (pokemonSelected: string) => void
};

export default function PokemonComponent(props: PokemonComponentProps) {

    function onClick() {
        props.onPokemonSelected(props.pokemon.id.toString());
    }

    return (
        <>
        <Card onClick={onClick} className="flex flex-col items-center gap-y-2">
            <img className="my-2" width="100" src={props.pokemon.image.thumbnail}></img>
            <Typography>{props.pokemon.name.english}</Typography>
            <Box>
                <Type type={props.pokemon.type[0]}></Type>
                {props.pokemon.type[1] && <Type type={props.pokemon.type[1]}/>}
            </Box>
            
        </Card>
        </>
    )

}