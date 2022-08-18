class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarSaldoPoup(valor){
        this.saldoPoup += valor
    }
}


const gabriel = new ClientePoupanca("Gabriel", "email@email.com", "12312312", 100, 200)

console.log(gabriel)

gabriel.depositar(200)

gabriel.exibirSaldo()

gabriel.depositarSaldoPoup(350)

console.log(gabriel)