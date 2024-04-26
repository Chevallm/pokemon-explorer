import { Box, Typography } from "@mui/material";

import Type from "../Type";
import { Pokemon } from "../../types/Pokemon";

type PokemonIdentityProps = {
    pokemon: Pokemon
}

export default function PokemonIdentity(props: PokemonIdentityProps) {

    const [male, female] = props.pokemon.profile.gender.split(':').map(genderString => parseInt(genderString) * 50 / 100);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2, width: '100%' }}>
            <img src={props.pokemon.image.hires} height="400" width="400" />
            <Typography variant="h2">{props.pokemon.name.english}</Typography>
            <Typography variant="h5">{props.pokemon.species}</Typography>
            <Box sx={{ my: 2 }}>
                <Type type={props.pokemon.type[0]}></Type>
                {props.pokemon.type[1] && (<Type type={props.pokemon.type[1]}></Type>)}
            </Box>

            <Box sx={{ display: 'flex', columnGap: 5 }}>
                <Typography>🇫🇷 {props.pokemon.name.french}</Typography>
                <Typography>🇯🇵 {props.pokemon.name.japanese}</Typography>
                <Typography>🇨🇳 {props.pokemon.name.chinese}</Typography>
            </Box>

            <Box>
                <Typography>Height: {props.pokemon.profile.height}</Typography>
                <Typography>Weight: {props.pokemon.profile.weight}</Typography>
            </Box>

            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography>Gender repartition</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', width: '50%'}}>
                    <span className="h-8 w-full relative rounded-full" style={{backgroundColor: '#5A5A5A'}}>
                        <span className='absolute h-8 bg-blue-300 rounded-e-full text-left' style={{left: '50%', width: `${male}%`}}>
                            <span>&nbsp;Male</span>
                        </span>
                        <span className="absolute h-8 bg-pink-300 rounded-s-full text-right" style={{right: '50%', width: `${female}%`}}>
                            <span>Female&nbsp;</span>
                        </span>
                    </span>
                </Box>
            </Box>
        </Box>
    )
}