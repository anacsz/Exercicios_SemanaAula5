console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras      ')
console.log('           Ana Cláudia Almeida        ')
console.log('--------------------------------------')

const produtos = require('./database')
const pegarInput = require('readline-sync')
const carrinho = []
produtos.sort((a,b) =>a.preco - b.preco)

const selecaoCategoria = pegarInput.question('Voce deseja encontrar produtos por Categoria? {S/N} ')

if(selecaoCategoria.toUpperCase() ==='S')
{
    console.log('Essas são as opçoes:')
    console.log('                                 ')
    console.log('alimento , informatica ,casa , higiene , bebida ' )
    console.log('                                 ')
    const produtosCategoria = pegarInput.question('Qual Categoria voce escolhe? ')
    //produtos.sort((a,b) =>a.preco - b.preco)
    const produtosC = produtos.filter(item => item.categoria == produtosCategoria)
    console.table(produtosC);
    console.log('                                                                 ')
    
}else{
     (selecaoCategoria.toLocaleUpperCase() !=='S')
     produtos.sort((a,b) =>a.preco - b.preco)
     console.table(produtos);
    }

 const array = new Array()
 class Pedido {
    constructor(array){
        this.produtoId = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () => {
    produtoId = parseInt(pegarInput.question('Digite o ID dos produtos escolhidos: '))
    for(i = 0; i < 1000; i++){
        findId = produtos.find(item => item.id == produtoId)
        if(findId){
            break;
        }else{
            produtoId = parseInt(pegarInput.question('ID Invalido'))
            //compras()
            
        }
    }

    quantidadeItem = parseInt(pegarInput.question('Digite a quantidade desejada: '))

    for (i=0; i<1000; i++){
        if(quantidadeItem > 0){
            break; 
        }else{
            quantidadeItem = parseInt(pegarInput.question('Quantidade Invalida, digite novamente: '))
        }
    }
        

    const produtosCarrinho = {...findId, quantidade: quantidadeItem}
    carrinho.push(produtosCarrinho)

    const comprarMais = pegarInput.question('Deseja continuar comprando? {S/N} ')
        if (comprarMais.toUpperCase() === 'N'){
            cupomOk = pegarInput.question('Voce possui cupom de desconto? {S/N} ')
                if (cupomOk.toUpperCase() === 'S'){
                    cupom = parseInt(pegarInput.question('Digite o valor do cupom :'))
                }
        }else
        {
            compras()
        }
            for (i=0; i<1000; i++)
           {
                if(cupom > 15 || cupom < 0){
                    cupom = parseInt(pegarInput.question('Cupom inválido. Tente novamente.'))
               }else
                {
                    break;
                }
           }
        }
compras()  

class Order {
    constructor(carrinho)
    {
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calcSubtotal(){
        this.subTotal = this.newProducts.reduce((acumulador,item) =>acumulador + (item.preco*item.quantidade),0)
        }
    }
    const order = new Order(carrinho)
    console.table(order.newProducts)
    
    order.calcSubtotal()
    console.log(`Valor Total Pedido $ ${order.subTotal.toFixed(2)}.`)
    
    const desconto = order.subTotal * (cupom / 100)
    console.log(`Valor Desconto $ ${desconto.toFixed(2)}.`)
    
    const total = order.subTotal - desconto
    console.log(`Valor Total Pedido com Desconto $ ${total.toFixed(2)}.`)

    const hoje = new Date()
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }

    const dataHoje = hoje.toLocaleDateString('pt-BR', options)

    console.log("Pedido finalizado em " + dataHoje)

    console.log('                                            ')
    
    console.log('Agradecemos a Preferencia, Volte Sempre!!!!!')
    

