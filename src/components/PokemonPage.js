import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const url = "http://localhost:3001/pokemon/";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemons(data));
  }, [])

  //console.log("pokemons: ", pokemons)
  //console.log("Search: ", search);

  const pokemonsToDisplay = pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()));

  function handleSearchInput(searchInput) {
    setSearch(searchInput);
  }

  function handleFormSubmit(newPokemon) {
    //console.log("submitting form...");

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setPokemons([...pokemons, data])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleFormSubmit={handleFormSubmit} />
      <br />
      <Search search={search} handleSearchInput={handleSearchInput} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
