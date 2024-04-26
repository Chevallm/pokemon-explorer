import { Box, Typography, TableContainer, Table, TableBody, TableRow, TableCell, LinearProgress } from "@mui/material";
import { Pokemon } from "../../types/Pokemon";

type PokemonStatisticsProps = {
    pokemon: Pokemon
}
export default function PokemonStatistics(props: PokemonStatisticsProps) {

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h4">Statistics</Typography>
            <TableContainer sx={{ width: '80%' }}>
                <Table aria-label="a dense table">
                    <TableBody>
                        {props.pokemon.base && Object.entries(props.pokemon.base).map(([stat, value]) => (
                            <TableRow
                                key={stat}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {stat}
                                </TableCell>
                                <TableCell align="center">
                                    {value}
                                    <LinearProgress variant="determinate" value={value * 100 / 255} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}