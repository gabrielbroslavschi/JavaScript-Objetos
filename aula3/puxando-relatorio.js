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

let relatorio = "";

for(let info in cliente){

    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
    relatorio += `${info} ==> ${cliente[info]}
    `
    }
}

console.log(relatorio)