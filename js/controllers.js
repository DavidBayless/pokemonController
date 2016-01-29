app.controller('pokeController', ['$http', '$scope', 'pokeService', pokeController]);
// Change Me

function pokeController($http, $scope, pokeService) {
  var vm = this;
  vm.title = 'Angular Template';
  vm.pokemons = [];
  pokeService.then(function(pokemon) {
    vm.pokemons = pokemon;
  });

}
