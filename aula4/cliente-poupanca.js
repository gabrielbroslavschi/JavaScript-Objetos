function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const gabriel = new clientePoupanca("Gabriel", "123123123", "email@email.com", 100, 200)

console.log(gabriel)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

gabriel.depositarPoup(30)

console.log(gabriel.saldoPoup)