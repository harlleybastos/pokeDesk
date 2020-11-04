let numeroDePokemons = 0;
const pokedex = document.getElementById('pokedex');

   const consultarPokemons =  async () =>{ /*Função que replica em ordem todos os pokemons de acordo com a páginação */
      for(var i = 1 ; i < 150; i++){
           await pegarPoke(i);
      }
   }
 consultarPokemons();

