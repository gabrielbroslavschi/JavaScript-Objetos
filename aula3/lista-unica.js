const cliente = [{
    nome:"andre",
    cpf:"1231231231",
    dependentes:[{
        nome:"sara",
        parentesco:"filha",
        dataNasc:"11/08/2022"
    },
    {
        nome:"Gabriel", 
        parentesco:"primo", 
        dataNasc:"08/08/2001"
    }]
},
{
    nome:"jose",
    cpf:"312321123",
    dependentes:[{
        nome:"jaqueline",
        parentesco:"filha",
        dataNasc:"11/08/1988"
    },
    {
        nome:"lucas", 
        parentesco:"primo", 
        dataNasc:"08/08/2007"
    }]
}
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(listaDependentes)
