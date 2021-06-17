const submit = document.getElementById('botao');

function alertaInvalido() {
  const nome = document.getElementById('login-tw').value;
  const senha = document.getElementById('senha-tw').value;
  const compare = nome.indexOf('@');
  const erro = 'Login ou senha inválidos.';

  if (compare === -1) {
    alert(erro);
  } else if (senha === '') {
    alert(erro);
  } else if (nome.length < 3) {
    alert(erro);
  } else {
    alert('Olá, Tryber!');
  }
}

submit.addEventListener('click', alertaInvalido);

function checar(aleatory){
  
}

const check = document.getElementById('agreement')
check.addEventListener('click', checar);

function previne(event){
  event.preventDefault()
}

const button = document.getElementById('submit-btn');
button.addEventListener('click', previne);
