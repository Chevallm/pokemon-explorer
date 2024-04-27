import { Box } from "@mui/material"
import SearchBar from "../SearchBar"
import Type from "../Type";
import { useState } from "react";

type PokedexFilterProps = {
    onSearchPokedex: (query: string) => void;
    onTypeFilter: (types: Set<string>) => void;
}

export default function PokedexFilter(props: PokedexFilterProps) {

    const [typesFilter, setTypesFilter] = useState(new Set<string>());

    const types = [
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Grass',
        'Ground',
        'Ice',
        'Normal',
        'Poison',
        'Psychic',
        'Rock',
        'Steel',
        'Water'
    ];

    function filterType(type: string) {
        const updatedTypesFiltered = new Set([...typesFilter]);
        if (updatedTypesFiltered.has(type)) {
            updatedTypesFiltered.delete(type)
        } else {
            updatedTypesFiltered.add(type);
        }
        setTypesFilter(updatedTypesFiltered);
        props.onTypeFilter(updatedTypesFiltered);
    }

    return (
        <>
            <SearchBar onSearch={props.onSearchPokedex}></SearchBar>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center', p: 2}}>
                {types.map(type => 
                    <Box onClick={() => filterType(type)} sx={{filter: typesFilter.has(type) ? 'none' : 'grayscale(100%)'}}>
                        <Type key={crypto.randomUUID()} type={type}/>
                    </Box>
                )}
            </Box>
        </>
    )
}