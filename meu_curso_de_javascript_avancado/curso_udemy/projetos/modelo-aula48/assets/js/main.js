const inputTarefa = document.querySelector('.input-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus(); // focus é um elemento html;
}

function chamarButton(lista) {
    const button = document.createElement('button');
    button.innerHTML = 'Apagar';
    button.setAttribute('class', 'apagar-tarefa')
    lista.appendChild(button)
}

function criaLista() {
    const lista =  document.createElement('li');
    return lista;
}

function criaTarefa(textoInput) {
   textoInput += ' '
   const lista = criaLista();
   lista.innerHTML = textoInput;
    tarefas.appendChild(lista)
    limpaInput()
    chamarButton(lista)
    salvarTarefas()
}

document.addEventListener('keypress', function(e) {

    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
    
})

document.addEventListener('click', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('btn-add-tarefa')) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }

    if(elemento.classList.contains('apagar-tarefa'))  {
        // console.log(elemento.parentElement) --> checando quem é o pai desse elemento
        elemento.parentElement.remove()
        salvarTarefas();
    }
})


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;                 // remove espaços
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
}
const tarefasJson = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas', tarefasJson);
}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas ) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()