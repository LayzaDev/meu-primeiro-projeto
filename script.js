function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    if(minuto < 10){

        msg.innerHTML = `Agora são ${hora}:0${minuto} hrs.`

    } else {

        msg.innerHTML = `Agora são ${hora}:${minuto} hrs.`
        
    }

    if ( hora >= 0 && hora < 12 ) {

        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'fotomanha.png'
        document.body.style.background = '#87ae8e'

    } else if ( hora >= 12 && hora < 18 ) {

        msg.innerHTML += '<p>Boa tarde!</p>'
        img.src = 'fototarde.png'
        document.body.style.background = '#89bdd4'

    } else {

        msg.innerHTML  += '<p>Boa noite!</p>'
        img.src = 'fotonoite.png'
        document.body.style.background = '#36686b'

    }

}

