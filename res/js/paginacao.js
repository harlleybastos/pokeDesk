let arrayComTamanhodaPagina = consultarPokemons().length;// Constante com o todos os objetos da página
let paginaAtual = 1; //Parametro que iremos passar na URL dizendo qual a página atual
const pagina = parseInt(paginaAtual) || 1; //Transforma o resultado da pagína atual em inteiro e checa se existe. Caso exista ele pega o resultado, caso contrario pega 1 
const limiteDeItensNaPagina = 8; //Limite de itens que vai exibir na página
let iniciaBusca = (paginaAtual - 1) * limiteDeItensNaPagina; //Inicia a busca do Array em uma posição Ex: posição 4 até a 10 de acordo com o limite de páginas
/*Exemplo -> Pagina atual = 1. 1-1 = 0. 0 x limiteDeItensNaPagina = 0* || Inicia a busca a partir do item 0*/
const quantidadeTotaldeItens = arrayComTamanhodaPagina.length; // Quantidade total de itens no array
let pegaItemPosicao = arrayComTamanhodaPagina.slice(iniciaBusca, iniciaBusca + limiteDeItensNaPagina) //Pega um item na posição x até y a partir do valor do iniciaBusca . EX. Pagina 1 : ((1 - 1 = 0) * limiteDeItensNaPagina) -> 0 + limiteDeItensNaPagina = 8;
/*Começo do 0 e vai até o 8 | POSIÇÃO INICIAL ATÉ A POSIÇÃO FINAL*/


/*============================================================================= */

const paginacao = (paginaAtual, quantidadeTotaldeItens, limiteDeItensNaPagina) => {

    let tamanhodaPagina = Math.ceil(quantidadeTotaldeItens/limiteDeItensNaPagina); //Quantidade de pagina que tem de acordo com a quantidade de itens. Math.ceil arredonda pra cima
    /* EXEMPLO: 150 / 8 */


    const _paginacao = {
        paginaatual: paginaAtual,
        totaldeitens :quantidadeTotaldeItens,
        limitedeitensnapagina : limiteDeItensNaPagina,
        paginas:tamanhodaPagina
    }

    if(paginaAtual > 1){//Se a pagina atual for maior que 1 significa que se tem uma pagina anterior
        /*Se for -1 quer dizer que não tem pagina anterior a 1 ou seja, pagina 0*/
        let paginaAnterior = paginaAtual - 1;
        _paginacao.anterior = paginaAnterior;// Adiciona um item chamado previous que possui o valor da paginaAtual - 1.
        /*Se estiver na página 2 por exemplo. previous: 2 - 1 = | previous = 1 */
    }

    let quantidadeDePaginasSobrando = quantidadeTotaldeItens - (paginaAtual * limiteDeItensNaPagina) //Quantidade de pagina que ainda esta sobrando
    /* 150 - (1 * 8) = 142 */

    if(quantidadeDePaginasSobrando > 0)//Se tiver mais paginas sobrando adiciona um item no objeto junto a um valor adicional
        _paginacao.proxima = paginaAtual + 1; // Adicionando item proxima que recebe o numero da pagina atual e soma +1



    return _paginacao;

    }

console.log(arrayComTamanhodaPagina)
    
