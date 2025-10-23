window.document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnMaiuscula").addEventListener("click", () => {
    let input = document.getElementById("input-text").value.toUpperCase();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `RESULTADO: ${input}`;
  });

  document.getElementById("btnMinuscula").addEventListener("click", () => {
    let input = document.getElementById("input-text").value.toLowerCase();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `RESULTADO: ${input}`;
  });
});
