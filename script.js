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
