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

  //   document.getElementById("btnPrimeiraMaiuscula").addEventListener("click", () => {
  //     let input = document.getElementById("input-text").value.toLowerCase();
  //     let resultado = document.getElementById("resultado");
  //     input = input.charAt(0).toUpperCase() + input.slice(1);
  //     for(i=0; i<=input.length;i++){
  //       if (input.charAt(i)==="." && input.charAt(i+1)===" "){
  //         input[i+2] = input.charAt(i+2).toUpperCase()
  //       }
  //     }
  //     resultado.innerHTML = `RESULTADO: ${input[i+2]}`;

  //   })

  // });
  document
    .getElementById("btnPrimeiraMaiuscula")
    .addEventListener("click", () => {
      let input = document.getElementById("input-text").value.toLowerCase();
      let resultado = document.getElementById("resultado");

      input = input.charAt(0).toUpperCase() + input.slice(1);
      const especial = ".!;?:";

      let newText = "";
      for (let i = 0; i < input.length; i++) {
        if (
          especial.includes(input.charAt(i)) &&
          input.charAt(i + 1) === " " &&
          i + 2 < input.length
        ) {
          newText += input.charAt(i);
          newText += input.charAt(i + 1);
          newText += input.charAt(i + 2).toUpperCase();
          i += 2;
        } else {
          newText += input.charAt(i);
        }
      }
      input = newText;

      resultado.innerHTML = `RESULTADO: ${input}`;
    });
  // document.getElementById('btnPrimeiraMaiuscula').addEventListener("click", ()=>{
  //       let input = document.getElementById("input-text").value
  //       input = input.replace(/\.\s*([a-z])/g, (letra) => {
  //                               return letra.toUpperCase();
  //                             })
  //       let resultado = document.getElementById('resultado')
  //       resultado.innerHTML = `Resultado: ${input}`
  //     })

  document.getElementById("limpar").addEventListener("click", () => {
    let input = document.getElementById("input-text").value;
    input = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `RESULTADO: ${input}`;
  });

  document.getElementById('color').addEventListener('click', () => {
    let input = document.getElementById("input-text").value;
    let resultado = document.getElementById("resultado");
    let color = document.getElementById('color').value;


    resultado.innerHTML = `<p style="display: inline-block">RESULTADO:</p> <p style="color:${color}; display: inline-block">${input}</p>`

  })

});
