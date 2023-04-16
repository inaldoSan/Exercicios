
setInterval(function () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    let boa = ''
    if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src = "./assets/img/manha.png"
        boa = "Bom Dia"
    }
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "./assets/img/tarde.png"
        document.body.style.background = "rgba(230, 129, 47, 0.849)"
        boa = "Boa Tarde"
    }
    else {
        // BOA NOITE
        img.src = "./assets/img/noite.png"
        document.body.style.background = "rgba(107, 114, 111, 0.479)"
        boa = "Boa Noite"
    }
    msg.innerHTML = `Agora são ${data.toLocaleTimeString()} horas <br><br>${boa}`
}, 1000)
