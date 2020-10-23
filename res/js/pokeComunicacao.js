/*function buscaPokemon(id) { //Função que recebe um id e um numero unico como parametro para buscar pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function(resposta) {
            resposta.json()
                .then(function(pokemon) {
                })
        })
}*/

const pegarPoke = async id =>{
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    criandoCardDoPokemon(pokemon) // Função que cria os cards
}



