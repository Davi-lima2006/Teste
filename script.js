document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const erroMsg = document.getElementById("erro-msg");

  if (nome === "" || email === "") {
    erroMsg.textContent = "Preencha todos os campos corretamente.";
  } else {
    erroMsg.textContent = "";
    alert("Formulário enviado com sucesso!");
  }
});
