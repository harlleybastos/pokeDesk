let lista = document.getElementById('lista-de-pokemons'); // Buscando na HTML a Div com a lista de pokemons
let numeroDePokemons = 20;
let referencia = 1;

const pegarPoke = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    criandoCardDoPokemon(pokemon) // Função que cria os cards

}

const pokemonSelecionado = async (id) => { // Caso o pokemon seja clicado / selecionado ele invoca essa função
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    mostrarPopUp(pokemon);
}



const puxaPoke = () => {
    const promisesPokemon = [];

    for (let i = 1; i <= numeroDePokemons; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promisesPokemon.push(fetch(url)
            .then(resposta => resposta.json()));
    }

    Promise.all(promisesPokemon).then(resultado => {
        const pokemon = resultado.map(dados => ({
            nome: dados.name,
            id: dados.id,
            tipo: dados.types.map(type => type.type.name).join(' | ')
        }));
        mostraPokemon(pokemon);
    });
}

const mostraPokemon = (pokemon) => {

    const htmlPOKEMON = pokemon.map(pok => `
    <div class="pokemon" onclick="pokemonSelecionado(${pok.id})">
        <div class="container-foto-pokemon"> 
            <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pok.id}.svg"/>
        </div>
        <div class="fundo">
            <img class="pokeball" src="https://i.imgur.com/8qOOkAG.png" />
        </div>
        <div class="informacoes-pokemon">
            <span class="numero-pokemon">#${pok.id}</span>
            <h3 class="nome-pokemon">${pok.nome}</h3>
            <small class="cor-badge"> <span>Tipo: <span class="titulopok">${pok.tipo}</span></small>
        </div>
    </div>  
    `).join('');


    lista.innerHTML = htmlPOKEMON;
}


puxaPoke();