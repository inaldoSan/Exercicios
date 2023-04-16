function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var usuarioAno = document.getElementById('usuario_ano')
    var res = document.getElementById('res')

    if (usuarioAno.value.length == 0 || usuarioAno.value > ano) {
        window.alert('[ERRO] DIGITE NOVAMENTE')
    }
    else {
        var fsex = document.getElementsByName('genero')
        var idade = ano - Number(usuarioAno.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', './assets/img/crianca_masc.png')
            }
            else if (idade >= 10 && idade < 50) {
                // jovem
                img.setAttribute('src', './assets/img/jogem_masc.png')
            }
            else {
                // idoso
                img.setAttribute('src', './assets/img/idoso.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', './assets/img/crianca_fem.png')
            }
            else if (idade >= 10 && idade < 50) {
                // jovem
                img.setAttribute('src', './assets/img/jovem_fem.png')
            }
            else {
                // idoso
                img.setAttribute('src', './assets/img/idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}