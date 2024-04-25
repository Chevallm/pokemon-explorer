import { Box, SxProps } from "@mui/system"

type TypeProps = {
    type: string
}
export default function Type(props: TypeProps) {

    const colorMap: {[type: string]: string} = {
        bug: '#91A119',
        dark: '#624D4E',
        dragon: '#5060E1',
        electric: '#FAC000',
        fairy: '#EF70EF',
        fighting: '#FF8000',
        fire: '#E62829',
        flying: '#81B9EF',
        ghost: '#704170',
        ice: '#3DCEF3',
        grass: '#3FA129',
        ground: '#915121',
        normal: '#9FA19F',
        poison: '#9141CB',
        psychic: '#EF4179',
        rock: '#AFA981',
        steel: '#60A1B8',
        water: '#2980EF'
    }

    const spanStyle: SxProps = {
        backgroundColor: '#5A5A5A',
        padding: '2px 2px 2px 4px',
        margin: '2px',
        borderRadius: '15px',
        display: 'inline-flex',
        whiteSpace: 'nowrap',
        backgroundImage: `linear-gradient(105deg, ${colorMap[props.type.toLocaleLowerCase()]} 30px, #5A5A5A 31px, #5A5A5A)`,
        alignItems: 'center',
    }

    const textStyle = {
        'margin': '0 5px 0 10px',
        'display': 'inline-block',
        'min-width': '50px',
        'text-align': 'center',
    }

    return (
        <>
            <Box sx={spanStyle}>
                <img src={`src/assets/types/${props.type.toLocaleLowerCase()}.png`}/>
                <span style={textStyle}>{props.type}</span>
            </Box>
        </>
    )
}