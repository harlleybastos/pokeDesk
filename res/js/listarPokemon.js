const numeroDePokemons = 150;

const consultarPokemons = async () =>{ /*Função que pega os valores digitados e aponta para função Fetch.
     Recebe como parametro o texto(nome ou ID) digitado no campo "pesquisa" e o nome da div do pokemon  */

    for(var i = 1; i <= numeroDePokemons; i++){ //Percorrendo todos os pokemons e esperando para fazer algo
        await pegarPoke(i); // Pausar retorno da Promisse
    }
    
}

consultarPokemons();