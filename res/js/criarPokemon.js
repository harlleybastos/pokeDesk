const coloracaoTipos = { //ARRAY COM COR DOS TIPOS DE POKEMONS
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    eletric: '#FCF7DE',
    water: '#DEF3FD',
    ground:'#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#f5f5f5',
    fighting:'#e6e0d4',
    normal:'#f5f5f5'
};

const instanciaTipos = Object.keys(coloracaoTipos); // Retorna o tipo (Fire, Grass..)


function criandoCardDoPokemon(pokemon){ // Converter os dados recebidos pelo Fetch em HTML
    const elementoPokemon = document.createElement("div");    //Criando o card do elemento pokemon
    const elementoCor = document.createElement("div");
    elementoCor.classList.add("cor-badge");
    elementoPokemon.classList.add("pokemonn"); //Adicionando classe no elemento criado
    elementoPokemon.onclick = function(){ //Adicionando a função de click no elemento criado com a função de s
        pokemonSelecionado(pokemon.id)
    }

    const listaTiposPokemons = pokemon.types.map(elemento => elemento.type.name );//Entrando em pokemon.types e retornando o type.name ja tratado (Percorre o array)
    const tiposPokemon = instanciaTipos.find(tipo => listaTiposPokemons.indexOf(tipo) > -1); //Recebe os textos (Fire, Grass..) e procura o primeiro que esta no index
    const nomePokemonComEstilo = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // Alterando o estilo da fonte de cada nome | Primeira letra maiúcula
    
    
    //Conteudo que vai dentro do elemento criado
    const conteudoDaDiv = `
        <div class="container-foto-pokemonn"> 
            <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg"/>
        </div>
        <div class="fundon">
            <img class="pokeballn" src="https://i.imgur.com/8qOOkAG.png" />
        </div>
        <div class="informacoes-pokemonn">
            <span class="numero-pokemonn">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="nome-pokemonn">${nomePokemonComEstilo}</h3>
        </div>
    
    `;

    const complementa = `
            <small class="tipo-pokemonn"> <span>Tipo: <span class="titulopokn">${tiposPokemon}</span></small>
    `
    elementoCor.innerHTML = complementa;
    elementoPokemon.innerHTML = conteudoDaDiv; // Colocando dentro da div criada todo o HTML da const ConteudodaDIV
    // Setando a div criada como filha da div lista-de-pokemons
    lista.appendChild(elementoPokemon).appendChild(elementoCor)  //Inserindo dentro do HTML o elementoPokemon (Div criada acima) e elementoCor(Div com Small)

}