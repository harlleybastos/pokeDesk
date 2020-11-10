const arrayDePokemons = []; //Array responsável por guardar todos os resultados
const caixaValorDigitado = document.getElementById('caixa-pesquisa'); // Campo em que o usuario digita
const pokedex = document.getElementById('pokedex');
const pokexibe = document.querySelector('.pokemonn');

const { clientHeight, scrollHeight, scrollTop } = document.documentElement; // copiando o valor das proriedades
const usuarioPertodoFimdaPagina = scrollTop + clientHeight >= scrollHeight - 10; /*Checando se o usuario esta perto do fim da página | Se a distancia entre o topo e o topo visivel do documento
somada a altura entre topo e o final da parte visivel da pagina é maior ou igual a altura total de desse documento - 10 */

let temPoke = true;// Variavel para usar como referencia para erros




const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;

fetch(url)
    .then(resposta => resposta.json())
    .then(pokemons => arrayDePokemons.push(...pokemons.results))

    console.log(arrayDePokemons);

function encontrarPokemon(pesquisa, arrayDePokemons) { //Função responsável por filtrar os pokemons de acordo com a "Expressão" digitada.
    /*Recebe como parametro o termo "pesquisado" e os pokemons do arrayDePokemon */
    return arrayDePokemons.filter((pokemon, indice) => { //Filtra dentro do Array
        const id = indice + 1;
        const regex = new RegExp(pesquisa, 'gi');//Armazena a pesquisa (Valor digitado no campo) em uma variavel. O 'gi' aponta uma pesquisa global
        return regex.test(pokemon.name) || regex.test(id.toString);
    })
}

function exibirPokemon() {
    console.log(temPoke);

    const pokeErro = `
    <div class="img-aviso">
        <h1>Pokemon não encontrado !</h1>
        <img src="https://i.imgur.com/VGtUTtC.gif"/>
    </div>
    `

    const resultadoPokemon = encontrarPokemon(this.value, arrayDePokemons); //Recebe o valor digitado na pesquisa como parametro e percorre o array para encontrar o mesmo

    if(!resultadoPokemon.length){ // Se não tiver o pokemon dentro do Array ele procura de novo na api com numero
        temPoke = true;
        pegarPoke(this.value);
    }

    

    
    const htmlResult = resultadoPokemon.map(async pokemon => { //Mapeando e retornando os valores filtrados
        return await pegarPoke(pokemon.test);
    });

    lista.innerHTML = htmlResult;

    if (caixaValorDigitado.value == '') { // Se a caixa de pesquisa estiver vazia ele volta para a página incial
        lista.innerHTML = '';
        return location.replace('index.html')
    }

    // if(caixaValorDigitado.value > "" && nome.textContent == null){
    //     pokedex.innerHTML = pokeErro;
    // }
}

caixaValorDigitado.addEventListener('input', exibirPokemon);
