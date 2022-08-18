const cliente = {
    nome:"andre",
    idade:36,
    cpf:"12312312312",
    email:"andre@email.com",
    fones:[
        "123123123",
        "321321321"
    ],
    dependentes:[{
        nome:"sara",
        parentesco:"filha",
        dataNasc:"11/08/2022"
    }]
}

cliente.dependentes.push({
    nome:"Gabriel", 
    parentesco:"primo", 
    dataNasc:"08/08/2001"
})

console.log(cliente)

//verifica o dependente mais novo
//entra no objeto cliente, na chave dependentes, filtra com a arrow function que para cada dependente que percorre aquele looping
//ele verifica cada objeto se é oque procuramos.
const dependenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "11/08/2022")


//Assim ele irá trazer um array com a informação
console.log(dependenteMaisNovo)
//Assim ele irá trazer a informação mais precisa que procuramos
console.log(dependenteMaisNovo[0].nome)