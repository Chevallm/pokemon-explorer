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
import { Pokemon } from './types/Pokemon';

function App() {
  
  const [page, setPage] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState<string | null>(null);
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  
  function onPokemonSelected(pokemonSelected: string) {
    setPokemonSelected(pokemonSelected);
  }
  
  return (
    <>
    <Box sx={{ pb: 7 }}>
      <ThemeProvider
        theme={darkTheme}>
          {pokemonSelected ? (
            <PokemonInfoComponent
              pokemonSelected={pokemonSelected}
              onGoBack={() => setPokemonSelected(null)}
              onPokemonSelected={onPokemonSelected}/>
          ) : (
            <PokedexComponent onPokemonSelected={onPokemonSelected}/>
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
