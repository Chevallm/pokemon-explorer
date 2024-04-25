import { TextField } from "@mui/material"

type SearchBarProps = {
    onSearch: (query: string) => void
}
export default function SearchBar(props: SearchBarProps) {

    let timeout: NodeJS.Timeout | undefined;

    function onChange(query: string) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            props.onSearch(query);
        }, 500);
    }

    return (
        <>
            <TextField
                onChange={e => onChange(e.target.value)}
                fullWidth
                size="medium"
                id="filled-search"
                label="Search bar"
                type="search"
                variant="filled"></TextField>
        </>
    )
}