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
import PokemonInfoComponent from "./components/PokemonInfo/PokemonInfoComponent";
import { pokedexData, pokemonNames } from './pokedex';
import { Pokedex } from './types/Pokedex';
import { ArrowUpward } from '@mui/icons-material';
import PokedexFilter from './components/PokedexFilter/PokedexFilter';

function App() {
  
  const [page, setPage] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState<string | null>(null);
  const [filteredPokedex, setFilteredPokedex] = useState<Pokedex>(pokedexData);
  
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
    setFilteredPokedex(pokedexData);
  }

  function filterPokemonByName(query: string) {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const filteredPokemonNamesIndexes = pokemonNames.reduce<number[]>((indexes, pokemonName, index) => {
      if (pokemonName.includes(lowerCaseQuery)) {
        indexes.push(index);
      }
      return indexes;
    }, []);
    const _filteredPokedex: Pokedex = filteredPokemonNamesIndexes.map(index => pokedexData[index]);
    if (_filteredPokedex.length < 1) {
      setFilteredPokedex(pokedexData);
    } else {
      setFilteredPokedex(_filteredPokedex);
    }
    
  }

  function filterPokemonByTypes(types: Set<string>) {
    console.log(types)
    const _filteredPokedex = filteredPokedex.filter(
      pokemon => pokemon.type
      .filter(
        type => type !== undefined
      ).some(
        pokemonType => types.has(pokemonType!)
      ));
    if (_filteredPokedex.length < 1) {
      setFilteredPokedex(pokedexData);
    } else {
      setFilteredPokedex(_filteredPokedex);
    }
  }

  
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
              <PokedexFilter onSearchPokedex={filterPokemonByName} onTypeFilter={filterPokemonByTypes}/>
            </AppBar>
            <Box sx={{mt: 2}}>
              <PokedexComponent filteredPokedex={filteredPokedex} onPokemonSelected={onPokemonSelected}/>
            </Box>
            {window.scrollY > 0 && (
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
