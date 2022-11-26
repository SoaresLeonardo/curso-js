
document.addEventListener('click', e => {

    const el = e.target
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    // fetch(href)
    // .then(response =>  {
    //     if(response.status !== 200) throw new Error('ERROR')
    //     return response.text()
    // })
    // .then(html => carregaResultado(html))
    // .catch(e => console.error(e))


    try {
        const href = el.getAttribute('href');
        const response = await fetch(href)
        if (response.status !== 200) throw new Error('ERROR')
        const html = await response.text();
        carregaResultado(html)
    } catch (e) {
        console.log(e)
    }

}

function carregaResultado(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response
}




fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
        return resposta.text()
    })
    .then(html => console.log(html))
    .catch(e => console.error(e))