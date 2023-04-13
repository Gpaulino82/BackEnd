// Orientação a objetos -> POO

// caneta bic
// função: escrever no papel
// atributo: azul

// encapsulamento

class Caneta 
{
    // atributos -> propriedades -> adjetivos
    cor;

    // construtor
    constructor(opcao = "Azul")
    {
        this.cor = opcao;
        
    }
    
    // metodo -> função -> verbo -> ações
    escrever()
    {

    }

}

// bic1 é uma instancia da classe Caneta
// bic1 é um objeto da classe Caneta
var bic1 = new Caneta("Azul");
var bic2 = new Caneta("Vermelho");
var bic3 = new Caneta();

// referencia
var bic4 = bic2;