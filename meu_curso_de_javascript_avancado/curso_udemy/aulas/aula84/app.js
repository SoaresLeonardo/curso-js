class ControleRemoto  {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância

    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático

     static trocarPilha() {
        console.log('ok vou trocar');
    }
}

const controle = new ControleRemoto('LG');

ControleRemoto.trocarPilha()

console.log(controle)