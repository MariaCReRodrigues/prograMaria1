document.getElementByID("enviar").addEventListener("click", validaFormulario())

function validaFormulario() {

  if (document.getElementByID("nome").value != "" &&
    document.getElementByID("email").value != "" &&
    document.getElementByID("tele").value != "") {
    alert("Prontinho! Agora você vai receber as novidades por email.")
  } else {
    alert("Ops, preencha os três campos.")
  }
}
// Se os campos de email de nome e email estiverem preenchidos,
//   - envie os dados;
// Senão
//  - Peça para o usuário pra preencher os campos nome e email.
