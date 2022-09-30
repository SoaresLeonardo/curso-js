function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var text = window.document.getElementById('text')
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora < 5 ){
        //Boa Madrugada!
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#465265'
        text.innerHTML = '<p><strong>Boa Madrugada!</strong></p>'
    }
     else if (hora >= 0 && hora < 12 ) {
        //Bom Dia!
        img.src  = 'fotomanha.png' 
        document.body.style.background = '#fdfea5'
        head.style.color = 'black'
        foot.style.color = ' black'
        text.innerHTML = '<p><strong>Bom Dia!</strong></p>'
    } else if(hora >= 12 &&  hora < 18 ) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#f03904'
        text.innerHTML = '<p><strong>Boa Tarde!</strong></p>'
    } else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        text.innerHTML = '<p><strong>Boa Noite!</strong></p>'
    }
}

