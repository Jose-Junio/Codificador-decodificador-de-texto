function codificar() {
  let textoCodificar = document.getElementById('textoCodigicar').value;
  let textoCodificado = document.getElementById('textoCodificado');

  textoCodificar = textoCodificar.toLowerCase();
  textoCodificar = textoCodificar.trim();

  textoCodificar = textoCodificar.replace(/e/g,"enter");
  textoCodificar = textoCodificar.replace(/i/g,"imes");
  textoCodificar = textoCodificar.replace(/a/g,"ai");
  textoCodificar = textoCodificar.replace(/o/g,"ober");
  textoCodificar = textoCodificar.replace(/u/g,"ufat");
  
  textoCodificado.innerHTML =textoCodificar;

  let escondido = Array.from(document.getElementsByClassName("escondido"));

  for (let i = 0; i < escondido.length; i++) {
    escondido[i].classList.remove('escondido');
  }

  let esconder = document.getElementsByClassName("esconder");
  for (let i = 0; i < esconder.length; i++) {
    esconder[i].classList.add('escondido');
  }
}

function decodificar() {
  let textoCodificar = document.getElementById('textoCodigicar').value;
  let textoCodificado = document.getElementById('textoCodificado');
  
  textoCodificar = textoCodificar.toLowerCase();
  textoCodificar = textoCodificar.trim();

  textoCodificar = textoCodificar.replace(/enter/g,"e");
  textoCodificar = textoCodificar.replace(/imes/g,"i");
  textoCodificar = textoCodificar.replace(/ai/g,"a");
  textoCodificar = textoCodificar.replace(/ober/g,"o");
  textoCodificar = textoCodificar.replace(/ufat/g,"u");
  
  textoCodificado.innerHTML =textoCodificar;

  let escondido = Array.from(document.getElementsByClassName("escondido"));

  for (let i = 0; i < escondido.length; i++) {
    escondido[i].classList.remove('escondido');
  }

  let esconder = document.getElementsByClassName("esconder");
  for (let i = 0; i < esconder.length; i++) {
    esconder[i].classList.add('escondido');
  }
}


function copiar() {
  var texto = document.getElementById("textoCodificado").innerText;

  var input = document.createElement("input");
  document.body.appendChild(input);
  input.value = texto;
  
  input.select();
  
  document.execCommand("copy");
  
  document.body.removeChild(input);
  
  alert("Texto copiado: " + texto);
}