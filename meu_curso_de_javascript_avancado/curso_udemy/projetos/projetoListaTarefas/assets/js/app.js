function Lista() {
    this.input = document.querySelector('.input-tarefa') 
    this.tarefa = document.querySelector('.tarefas')

    this.addUmaTarefa = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-add')) {
                if(!this.input.value) return
                this.criaTarefa(this.input.value)
            }
            if (el.classList.contains('btn-del')) {
              
                el.parentElement.remove()
            }
          

        })
    }

    this.mostraLista = () => {
        this.btnEnter()
        this.addUmaTarefa()
    }

    this.criaLista = () => {
        const li = document.createElement('li')
        return li
    }
    

    this.limpaInput = () => {
        this.input.value = ''
        this.input.focus()
    }


    this.criaTarefa = (inputText) => {
        const lista = this.criaLista();
        lista.innerHTML = inputText
        lista.classList.add('li-style')
        this.tarefa.appendChild(lista)
        this.limpaInput()
        this.gerarBtnDel(lista)
    }

    this.btnEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                if(!this.input.value) return
                this.criaTarefa(this.input.value)
            }
        })
    }

    this.gerarBtnDel = (lista) => {
        const btn = document.createElement('i')
        btn.classList.add('uil')
        btn.classList.add('uil-trash-alt')
        btn.classList.add('btn-del')
        lista.appendChild(btn)
    }
}


const listaDeTarefas = new Lista()
listaDeTarefas.mostraLista()

