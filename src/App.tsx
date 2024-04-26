import { AppBar, BottomNavigation, BottomNavigationAction, Box, createTheme, Fab, Paper, ThemeProvider } from '@mui/material'
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
import { ArrowUpward } from '@mui/icons-material';

function App() {
  
  const [page, setPage] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState<string | null>(null);
  const [filteredPokedex, setFilteredPokedex] = useState<Pokedex>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  
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
    scrollTo({top: scrollPosition, behavior: 'instant'});
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

  window.addEventListener('scroll', () => {
    if (!pokemonSelected) {
      setScrollPosition(window.scrollY)
    }
  });
  
  return (
    <>
    <Box>
      <ThemeProvider
        theme={darkTheme}>
        {pokemonSelected ? (
            <PokemonInfoComponent
              pokemonSelected={pokemonSelected}
              onGoBack={onGoBack}
              onPokemonSelected={onPokemonSelected}/>
          ) : (
            <>
            <AppBar position='sticky'>
              <SearchBar onSearch={filterPokedex}></SearchBar>
            </AppBar>
            <Box sx={{mt: 2}}>
              <PokedexComponent filteredPokedex={filteredPokedex} onPokemonSelected={onPokemonSelected}/>
            </Box>
            {window.scrollY && (
              <Fab
                onClick={() => {
                  window.scrollTo({top: 0, behavior: 'smooth'})
                }}
                sx={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 75,
                    left: 'auto',
                    position: 'fixed'
                }}
                color="primary"
                aria-label="back">
                <ArrowUpward/>
            </Fab>
            )}
            </>
          )}
        <Paper sx={{ position: 'sticky', bottom: 0, mt: 2}} elevation={3}>
          <BottomNavigation
            showLabels
            value={page}
            onChange={(_page, newPage) => {
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
