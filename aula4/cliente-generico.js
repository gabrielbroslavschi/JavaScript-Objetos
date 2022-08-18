function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new cliente("andre", "123131", "email@email.com", 100)

console.log(andre)

andre.depositar(200)

console.log(andre)