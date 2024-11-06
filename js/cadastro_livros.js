document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os valores dos campos do formulário
    const title = document.getElementById('titulo').value;
    const author = document.getElementById('autor').value;
    const genre = document.getElementById('genero').value;
    const score = document.getElementById('nota').value;
    const text = document.getElementById('resenha').value;

    // Cria o objeto JSON com os dados do formulário
    const formData = {
        id: generateUUID(), // Função para gerar UUID
        title: title,
        author: author,
        genre: genre,
        score: score,
        text: text
    };

    // Envia a requisição POST
    fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Cadastro realizado com sucesso!');
        document.getElementById('book-form').reset(); // Limpa o formulário
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Cadastro realizado com sucesso!');
    });
});

// Função para gerar UUID (Universally Unique Identifier)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
