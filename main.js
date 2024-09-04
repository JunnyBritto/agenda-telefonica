document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    const nomeContatoInput = document.getElementById("nome-contato");
    const numeroContatoInput = document.getElementById("numero-contato");
    const tbody = document.querySelector("tbody");
    const totalContatos = document.getElementById("contatos-total");
    
    let contadorDeContatos = 0;
    let contatos = []; // Array para armazenar os nomes dos contatos

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nomeContato = nomeContatoInput.value.trim();
        const numeroContato = numeroContatoInput.value.trim();

        if (contatos.includes(nomeContato.toLowerCase())) {
            alert(`O contato ${nomeContato} já foi inserido.`);
        } else if (nomeContato !== "" && numeroContato !== "") {
            const novaLinha = document.createElement("tr");
            
            const colunaNome = document.createElement("td");
            colunaNome.textContent = nomeContato;

            const colunaNumero = document.createElement("td");
            colunaNumero.textContent = numeroContato;
            
            novaLinha.appendChild(colunaNome);
            novaLinha.appendChild(colunaNumero);
            
            tbody.appendChild(novaLinha);
            
            contatos.push(nomeContato.toLowerCase()); // Adiciona o nome ao array
            
            contadorDeContatos++;
            totalContatos.textContent = contadorDeContatos;

            // Limpa os campos de entrada
            nomeContatoInput.value = "";
            numeroContatoInput.value = "";
        }
    });
});