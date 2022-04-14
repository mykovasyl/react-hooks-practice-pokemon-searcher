import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonToDisplay }) {
  const displayPokemon = pokemonToDisplay.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      sprites={pokemon.sprites}
    />
  ));

  return <Card.Group itemsPerRow={6}>{displayPokemon}</Card.Group>;
}

export default PokemonCollection;
