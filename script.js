const numerosSorteados = new Set();
    const letras = ['B', 'I', 'N', 'G', 'O'];

    function sortearNumero() {
      if (numerosSorteados.size >= 75) {
        document.getElementById("sorteado").innerText = "Fim!";
        alert("Todos os números já foram sorteados.");
        return;
      }

      let numero;
      do {
        numero = Math.floor(Math.random() * 75) + 1;
      } while (numerosSorteados.has(numero));

      numerosSorteados.add(numero);

      const letra = letras[Math.floor((numero - 1) / 15)];
      document.getElementById("sorteado").innerHTML = `<span class="bold">${letra}</span>-${numero}`;
      document.getElementById("sorteados").innerHTML = `Números sorteados: ${[...numerosSorteados].map(n => `<span class="bold">${letras[Math.floor((n - 1) / 15)]}</span>-${n}`).join(', ')}`;
    }

    function reiniciarSorteio() {
      const confirmar = confirm("Tem certeza de que deseja reiniciar o sorteio?");
      if (confirmar) {
        numerosSorteados.clear();
        document.getElementById("sorteado").innerText = "--";
        document.getElementById("sorteados").innerText = "Números sorteados: ";
      }
    }