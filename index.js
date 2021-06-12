console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras      ')
console.log('           Ana Cláudia Almeida        ')
console.log('--------------------------------------')

const produtos = require('./database')
const pegarInput = require('readline-sync')
const carrinho = []

const selecaoCategoria = pegarInput.question('Voce deseja encontrar produtos por Categoria? {S/N} ')

if(selecaoCategoria.toLocaleUpperCase() ==='S')
{
    console.log('Essas são as opçoes:')
    console.log('                                 ')
    console.log('alimento , informatica ,casa , higiene , bebida ' )
    console.log('                                 ')
    const produtosCategoria = pegarInput.question('Qual Categoria voce escolhe? ')
    produtos.sort((a,b) =>a.preco - b.preco)
    const produtosC = Object.values(produtos).filter(produtos => produtos.categoria == produtosCategoria)
    console.table(produtosC);
    console.log('                                                                 ')
    
}else{
     (selecaoCategoria.toLocaleUpperCase() !=='S')
     produtos.sort((a,b) =>a.preco - b.preco)
     console.table(produtos);
    }

 //const iniciarCompra = pegarInput.question('Encontrou o produto Desejado: {S/N} ')
 //console.log('                                ')

 //if(iniciarCompra.toLocaleUpperCase() ==='S'){
  //   console.log('Boas Compras')
 //}else(iniciarCompra.toLocaleUpperCase() !=='S'){
   // console.log('Obrigado pela sua visita, estamos trabalhando para melhor atende-lo!!!')
 //}

 const array = new Array()
 class Pedido {
    constructor(array){
        this.produtoTipo = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () =>{
    produtoId = parseInt(pegarInput.question('Digite o ID dos produtos escolhidos: '))
    for( i=0; i < 1000; i++){
        findId = produtos.find(item => item.id == produtos.produtoId)
        if(findId){
            break;
        }else{
            produtoId = parseInt(pegarInput.question('ID Invalido'))
        }
    }

quantidadeItem = parseInt(pegarInput.question('Digite a quantidade desejada: '))
    for (i=0; i<1000; i++){
        if(quantidadeItem > 0){
            break 
        }else{
            quantidadeItem = parseInt(pegarInput.question('Quantidade Invalida: '))
        }
    }    
        const produtosCarrinho = {...findId, quantidade: quantidadeItem}
        carrinho.push(produtosCarrinho)

}
        const comprarMais = pegarInput.question('Deseja continuar comprando? {S/N}')
        if (comprarMais === 'n'){
           cupom = parseInt(read.question('Digite o valor do desconto:'))
        }  else {
            compras()
            }
            for (i=0; i<1000; i++){
            if(cupom > 15 || cupom < 0){
            cupom = parseInt(read.question('Cupom inválido. Tente novamente.'))
            } else{
                break  
            }
    }

compras()

