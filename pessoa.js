
class Pessoa
{
    nome;
    telefone;
    endereço;

    constructor()
    {
        console.log("buaaa");
    }
}

// herança
class PessoaFisica extends Pessoa
{
    cpf;

    constructor()
    {
        //sobrecarga
        super();
        console.log("nasci");
    }
}

class PessoJuridica extends Pessoa
{
    cpnj;
    responsavel;
}

class Funcionario extends PessoaFisica {

}

var joao = new PessoaFisica();
var ambev = new PessoJuridica();

joao instanceof PessoJuridica