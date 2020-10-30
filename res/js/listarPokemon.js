let numeroDePokemons = 150;
const pokedex = document.getElementById('pokedex');

const consultarPokemons =  async () =>{ /*Função que replica em ordem todos os pokemons de acordo com a páginação */
   for(var i = 1 ; i < numeroDePokemons; i++){
        await pegarPoke(i);
   }
    
}


consultarPokemons();