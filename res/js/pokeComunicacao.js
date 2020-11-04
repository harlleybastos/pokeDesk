const pegarPoke = async id =>{
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    criandoCardDoPokemon(pokemon) // Função que cria os cards
    
}

const pokemonSelecionado = async (id) =>{ // Caso o pokemon seja clicado / selecionado ele invoca essa função
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();

    mostrarPopUp(pokemon);
}

const pegarQuantidade = async () =>{ // Retorna o array com todos os pokemons, na contagem final foi tratado para exibir os 151 pokemons
    const url= `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const resposta = await fetch(url);
    const pokemons = await resposta.json();
    return pokemons.results;
}