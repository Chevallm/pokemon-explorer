import { BottomNavigation, BottomNavigationAction, Box, createTheme, Paper, ThemeProvider } from '@mui/material'
import './App.css'
import { useState } from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PokedexComponent from './components/Pokedex';
import PokemonInfoComponent from './components/PokemonInfo';
import SearchBar from './components/SearchBar';
import { pokedexData, pokemonNames } from './pokedex';
import { Pokedex } from './types/Pokedex';

function App() {
  
  const [page, setPage] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState<string | null>(null);
  const [filteredPokedex, setFilteredPokedex] = useState<Pokedex>([]);
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  
  function onPokemonSelected(pokemonSelected: string) {
    setPokemonSelected(pokemonSelected);
  }

  function onGoBack() {
    setPokemonSelected(null);
    setFilteredPokedex([]);
  }

  function filterPokedex(query: string) {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const filteredPokemonNamesIndexes = pokemonNames.reduce<number[]>((indexes, pokemonName, index) => {
      console.log(pokemonName)
      if (pokemonName.includes(lowerCaseQuery)) {
        indexes.push(index);
      }
      return indexes;
    }, []);
    const _filteredPokedex: Pokedex = filteredPokemonNamesIndexes.map(index => pokedexData[index]);
    setFilteredPokedex(_filteredPokedex);
  }
  
  return (
    <>
    <Box sx={{ pb: 7 }}>
      <ThemeProvider
        theme={darkTheme}>
        {pokemonSelected ? (
            <PokemonInfoComponent
              pokemonSelected={pokemonSelected}
              onGoBack={onGoBack}
              onPokemonSelected={onPokemonSelected}/>
          ) : (
            <>
            <Box sx={{width: '100%'}}>
              <SearchBar onSearch={filterPokedex}></SearchBar>
            </Box>
            <PokedexComponent filteredPokedex={filteredPokedex} onPokemonSelected={onPokemonSelected}/>
            </>
          )}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={page}
            onChange={(page, newPage) => {
              setPage(newPage);
            }}>
            <BottomNavigationAction label="Pokédex" icon={<MenuBookIcon/>}></BottomNavigationAction>
            <BottomNavigationAction label="Types (soon)" icon={<WatchLaterIcon/>}></BottomNavigationAction>
          </BottomNavigation>
        </Paper>
      </ThemeProvider>
    </Box>
    </>
  )
}

export default App
