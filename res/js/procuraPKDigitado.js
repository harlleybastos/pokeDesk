const arrayDePokemons = []; //Array responsável por guardar todos os resultados
const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
const caixaValorDigitado = document.getElementById('caixa-pesquisa');
const caixaPesquisa = document.getElementById('caixa-pesquisa');
const divCaixaPesquisa = document.getElementById('barra-pesquisa');




fetch(url)
    .then(resposta => resposta.json())
    .then(pokemons => arrayDePokemons.push(...pokemons.results))



function encontrarPokemon(pesquisa, arrayDePokemons) { //Função responsável por filtrar os pokemons de acordo com a "Expressão" digitada.
    /*Recebe como parametro o termo "pesquisado" e os pokemons do arrayDePokemon */
    return arrayDePokemons.filter(pokemon => { //Filtra dentro do Array
        const regex = new RegExp(pesquisa, 'gi');//Armazena a pesquisa (Valor digitado no campo) em uma variavel. O 'gi' aponta uma pesquisa global
        return pokemon.name.match(regex);
    })
}


function exibirPokemon() {
    lista.innerHTML = "";
    const resultadoPokemon = encontrarPokemon(this.value, arrayDePokemons); //Recebe o valor digitado na pesquisa como parametro e percorre o array para encontrar o mesmo
    const htmlResult = resultadoPokemon.map(pokemon => { //Mapeando e retornando os valores filtrados
        return `
        <h3 class="hidden" id="nome-pokemon">${pokemon.name}</h3>
        `
    }).join("")

    lista.innerHTML = htmlResult; // Inserindo os valores dentro da HTML
    const nome = document.getElementById('nome-pokemon').textContent;

    if (caixaValorDigitado.value == '') { // Se a caixa de pesquisa estiver vazia ele volta para a página incial
        lista.innerHTML = '';
        return location.replace('index.html')
    }

    if (caixaValorDigitado.value > '') { //Se o usuario estiver digitando e o for aparecendo pokemons vai acontecer isso
        lista.innerHTML = ""; //Limpa a tela
        pokedex.innerHTML = ""; //Limpa a tela
        const divCarrega = `
        <div class="img-aviso">
            <h1>Procurando...</h1>
            <img src="https://i.imgur.com/p1tekMG.gif"/>      
        </div>
        `
        pokedex.innerHTML = divCarrega;  //Insere a imagem da pokebola "Carregando.."

    } 

    if (caixaValorDigitado.value > '' && caixaValorDigitado.value == nome) {  //Se não encontrar o pokemon acontece isso
        pokedex.innerHTML = "" 
        lista.innerHTML = "";
        const divCarregado = `
        <div class="img-carrega">
            <img src="https://i.imgur.com/1F7xFxm.gif"/>
        </div>
            `
        pokedex.innerHTML = divCarregado; // Insere a imagem de pokemon encontrado !
        setTimeout(function () { // Espera um tempo para aparecer o pokemon por conta do tempo do gif
        pokedex.innerHTML = ""; // Limpa a tela
        caixaValorDigitado.value = ""; //Limpa a caixa de pesquisa para sair do IF
        pegarPoke(nome) // Exibe o pokemon pesquisado
        }, 3000)
    }

    if(caixaValorDigitado.value != nome && caixaValorDigitado.value > nome) {

    const avisoSemPoke = `
        <div class="img-aviso">
            <h1>Pokemon não encontrado !</h1>
            <img src="https://i.imgur.com/VGtUTtC.gif"/>
        </div>
    `
    
    setTimeout(function(){
    pokedex.innerHTML = avisoSemPoke; // IMAGEM DE ERRO
    },3000)
        
    }
}

caixaValorDigitado.addEventListener('change', exibirPokemon);
caixaValorDigitado.addEventListener('keyup', exibirPokemon);