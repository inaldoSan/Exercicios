//const btnlogin = document.getElementById('buttonLogin')

// btnlogin.addEventListener('click', eventoForm)

function eventoForm() {
    const inputlogin = document.getElementById('login')
    const inputpass = document.getElementById('pass')
    const login = inputlogin.value
    const pass = inputpass.value
    console.log(`${login} ${pass}`)
    if(login === "inaldo" && pass === "123456") { 
        alert("LOGADO")
    } else {
        alert(123456)
    }
}