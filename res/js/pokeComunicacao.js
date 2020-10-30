const pegarPoke = async id =>{
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    criandoCardDoPokemon(pokemon) // Função que cria os cards
    
}
