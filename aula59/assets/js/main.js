function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.EnterPress();
  };

  this.btnParaDisplay = (el) => {
    this.display.value += el.innerText;
  };

  this.clearDisplay = () => (this.display.value = "");

  this.apagaUm = () => (this.display.value = this.display.value.slice(0, -1));

  this.EnterPress = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert("conta inválida");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("conta inválida");
      return;
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.apagaUm();
      }

      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  };
}

const iniciaCalculadora = new Calculadora();
iniciaCalculadora.inicia();
