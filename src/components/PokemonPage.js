import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  const pokemonToDisplay = pokemon.filter((mon) =>
    mon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={setPokemon} pokemon={pokemon}/>
      <br />
      <Search onSearch={setSearch} />
      <br />
      <PokemonCollection pokemonToDisplay={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
