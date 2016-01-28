app.directive('pkPokemon', [pokemonDirective]);

function pokemonDirective() {
  return {
    templateUrl: '../views/pokemon.html'
  };
}
