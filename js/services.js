app.service('pokeService', ['$http', '$q', pokeService]);

function pokeService($http, $q) {
    var pokemons = [];
    function randPokemon() {
      return Math.floor(Math.random() * 778);
    }

    // function randNum() {
    //   return Math.floor(Math.random(1) * 151).toString();
    // }
    // var num = randNum();
    // var url = "http://pokeapi.co/api/v1/pokedex/1/";
    return $q(function(resolve, reject) {
      $http.get("http://pokeapi.co/api/v1/pokedex/1/")
      .then(function(pokemon) {
        console.log(pokemon);
        pokemons.push(pokemon.data.pokemon[0]);
        pokemons.push(pokemon.data.pokemon[1]);
        pokemons.push(pokemon.data.pokemon[2]);
        pokemons.push(pokemon.data.pokemon[3]);
        pokemons.push(pokemon.data.pokemon[4]);
        resolve(pokemons);
      }).catch(function(err) {
        console.log(err);
      });
    });
  }
