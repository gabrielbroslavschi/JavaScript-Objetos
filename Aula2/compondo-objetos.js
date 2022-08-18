const cliente = {
    nome:"andre",
    idade:36,
    cpf:"12312312312",
    email:"andre@email.com",
    fones:[
        "123123123",
        "321321321"
    ]
}

cliente.dependentes = {
    nome:"sara",
    parentesco:"filha",
    dataNasc:"11/08/2022"
}

console.log(cliente)

cliente.dependentes.nome="marina"

console.log(cliente)