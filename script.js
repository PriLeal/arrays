
  
      function inverter() {
        var inputText = document.getElementById('inputText').value;
        var sequencia = inputText.split(''); // Divide a sequência em um array de caracteres
        var resultado = sequencia.reverse().join(''); // Inverte o array e o junta novamente em uma sequência
      
        document.getElementById('resultado').textContent = resultado;
      }
      