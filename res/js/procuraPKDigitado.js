const arrayDePokemons = []; //Array responsável por guardar todos os resultados
const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
const caixaValorDigitado = document.getElementById('caixa-pesquisa');
const caixaPesquisa = document.getElementById('caixa-pesquisa');
const divCaixaPesquisa = document.getElementById('barra-pesquisa');
const pokeDiv = document.querySelector('.pokemon');
const { clientHeight, scrollHeight, scrollTop } = document.documentElement; // copiando o valor das proriedades
const usuarioPertodoFimdaPagina = scrollTop + clientHeight >= scrollHeight - 10 ; /*Checando se o usuario esta perto do fim da página | Se a distancia entre o topo e o topo visivel do documento
somada a altura entre topo e o final da parte visivel da pagina é maior ou igual a altura total de desse documento - 10 */
let temPoke = true; // Variavel para usar como referencia para erros


fetch(url)
    .then(resposta => resposta.json())
    .then(pokemons => arrayDePokemons.push(...pokemons.results))

console.log(arrayDePokemons)

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
        <h3 id="nome-pokemon">${pokemon.name}</h3>
        `
    }).join("")

    lista.innerHTML = htmlResult; // Inserindo os valores dentro da HTML
    const nome = document.getElementById('nome-pokemon').textContent; // Buscando o conteudo interno dos nomes exibidos

    if (caixaValorDigitado.value == '') { // Se a caixa de pesquisa estiver vazia ele volta para a página incial
        lista.innerHTML = '';
        return location.replace('index.html')
    }

    
    if (caixaValorDigitado.value > ''&& usuarioPertodoFimdaPagina) { //Se o usuario estiver digitando e o for aparecendo pokemons vai acontecer isso
        lista.innerHTML = "";
        temPoke = false;
        const divCarrega = `
        <div class="img-aviso">
            <h1>Procurando...</h1>
            <img src="https://i.imgur.com/p1tekMG.gif"/>      
        </div>
        `
        pokedex.innerHTML = divCarrega;  //Insere a imagem da pokebola "Carregando.."
        pokedex.scrollIntoView();
        setTimeout(function () {
            temPoke = true;
        }, 2000)
    }

    if (caixaValorDigitado.value == nome && pokedex > "" && usuarioPertodoFimdaPagina) {  //Se não encontrar o pokemon acontece isso
        lista.innerHTML = ""
        temPoke = true;
        lista.scrollIntoView();
        const divCarregado = `
        <div class="img-carrega">
        <img src="https://i.imgur.com/1F7xFxm.gif"/>
        </div>
        `
        pokedex.innerHTML = divCarregado; // Insere a imagem de pokemon encontrado !
        lista.scrollIntoView();

        setTimeout(function () { // Espera um tempo para aparecer o pokemon por conta do tempo do gif
            contagemDivLista = 1;
            lista.innerHTML = ".";
            caixaValorDigitado.value = ""; //Limpa a caixa de pesquisa
            pegarPoke(nome) // Exibe o pokemon pesquisado
            pokedex.innerHTML = "";
            pokedex.scrollIntoView();
        }, 3000)
    }

    setTimeout(function () { // Espera um tempo (Usuario Digitando) para aparecer o erro
        if (lista.innerHTML == "" && temPoke == true) {
            const pokeErro = `
            <div class="img-aviso">
                <h1>Pokemon não encontrado !</h1>
                <img src="https://i.imgur.com/VGtUTtC.gif"/>
            </div>
            `   
            setTimeout(function () {
                lista.innerHTML = "";
                pokedex.innerHTML = pokeErro;
                pokedex.scrollIntoView();
            }, 2000)
        }
    },5000)
}
caixaValorDigitado.addEventListener('keyup', exibirPokemon);
