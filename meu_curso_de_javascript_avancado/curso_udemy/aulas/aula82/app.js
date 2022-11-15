class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }
        this.ligado = true
    }

    
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome)
        this.cor = cor;
    }   
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    
    ligar() {
        console.log('Olá')
    }
}

const t1 = new Tablet('ipad', true);

const s1 =  new Smartphone('iphone','Preto')
s1.ligar()
console.log(s1)
t1.ligar()
console.log(t1)