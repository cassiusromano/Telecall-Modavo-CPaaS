const form = document.getElementById('form');
const campos = document.querySelectorAll('.requerido');
let numeros = 0;
const submit_login = document.getElementById('submit_login')
const submit_cadastro = document.getElementById('submit_login')
let respost = document.getElementById('res2')

//página de cadastro//

//validador:
/*
function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
*/

function validarNome() {
    if (campos[0].value.length < 16 || campos[0].value.length > 60) {
        return false
    }
    else {
        let nome = 'campos[0]'
        localStorage.setItem("nome", campos[0].value)
        return true
    }
}

function validarLogin() {

    if (campos[1].value.length == 6) {
        let login = 'campos[1]'
        localStorage.setItem("login", campos[1].value)
        return true
    } else {
        return false
    }

}
function validarSenha() {
    if (campos[2].value.length == 8) {
        numeros = 0
        for (i = 0; i <= 9; i++) {
            if (campos[2].value.indexOf(Number(i)) != -1) {
                numeros = numeros + 1
            }
        }
        if (numeros > 0) {
            return false
        } else {
            let senha = 'campos[2]'
            localStorage.setItem("senha", campos[2].value)
            return true
        }
    } else {
        return false
    }
}

function validarCSenha() {
    if (campos[3].value == campos[2].value) {
        return true
    } else {
        return false
    }
}
//Valida se todo o forms foi cadastrado corretamente
function validarForm() {
    let res = document.getElementById('res')
    if (validarNome() && validarLogin() && validarSenha() && validarCSenha() == true) {
        res.innerHTML = 'Cadastro realizado com sucesso! Redirecionando para login...'

        //Redireciona o usuário para a página de login após 2,5 segundos
        setTimeout(function() {
            window.location.href = "pagina_login.html"
        }, 5000);
    } else {
        res.innerHTML = '[ERROR404] - Avalie as informações cadastradas'
    }
}

//Página de login//
//vai comparar o login informado e o do localStorage

submit_login.addEventListener("click", function (event) {
    const loginsalvo = localStorage.getItem("login");
    const senhasalva = localStorage.getItem("senha");
    const c_login = document.getElementById('c_login');
    const n_senha = document.getElementById('n_senha');
    const bloco_login = document.getElementById('bloco_login');
    const body_login = document.getElementById('body');
    let imgload = document.getElementById('imgload');

    function validarAcessoLogin() {
        if (loginsalvo == c_login.value) {
            return true
        } else {
            return false
        }
    }

    function validarAcessoSenha() {
        if (senhasalva == n_senha.value) {
            return true
        } else {
            return false
        }
    }
    if (validarAcessoLogin() && validarAcessoSenha() != false) {
        respost.innerHTML = 'Login efetuado com sucesso! Direcionando para a página inicial...'
        /*window.location.href = ("home.html");*/
        bloco_login.style.display = 'none';
        body_login.style.background = 'white';
    }else{
        respost.innerHTML = 'Tudo errado!'
    }
})




