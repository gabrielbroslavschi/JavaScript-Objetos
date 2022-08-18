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
    },
    {
        nome:"Gabriel", 
        parentesco:"primo", 
        dataNasc:"08/08/2001"
    }],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    //Object.keys ele pega todas as chaves que passamos como parametro
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`oferta de seguro de vida para ${obj.nome}`)
    }

}

//Object.values ele pega os valores das chaves que passamos como parametro
console.log(Object.values(cliente))

//Object.entries ele pega os valores e retorna varios arryas dentro dele
console.log(Object.entries(cliente))

oferecerSeguro(cliente)