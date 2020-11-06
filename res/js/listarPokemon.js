const logo = document.querySelector('.imglogo');

let numeroDePokemons = 20;
let referencia = 1;
const pokedex = document.getElementById('pokedex');

const consultarPokemons = async () => { /*Função que replica em ordem todos os pokemons de acordo com a páginação */
   for (var i = referencia; i < numeroDePokemons; i++) {
      await pegarPoke(i);
   }
}

consultarPokemons()

logo.addEventListener("click", function() {
   return location.replace('index.html')
})

