import { Card } from "@mui/material";
import { Pokemon } from "../types/Pokemon"

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
            <p>{props.pokemon.name.english}</p>
        </Card>
        </>
    )

}