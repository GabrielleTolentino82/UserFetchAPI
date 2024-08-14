document.getElementById('Formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const userId = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const phone = document.getElementById('phone').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;

    const updatedData = {};

    if (email) updatedData.email = email;
    if (username) updatedData.username = username;
    if (senha) updatedData.password = senha;
    if (nome || sobrenome) updatedData.name = {};
    if (nome) updatedData.name.firstname = nome;
    if (sobrenome) updatedData.name.lastname = sobrenome;
    if (cidade || rua || numero) updatedData.address = {};
    if (cidade) updatedData.address.city = cidade;
    if (rua) updatedData.address.street = rua;
    if (numero) updatedData.address.number = numero;
    if (phone) updatedData.phone = phone;

    fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data => {
        mostrarResultados(data);
    })
    .catch(error => {
        console.error('Erro ao atualizar o usuário:', error);
    });
});

function mostrarResultados(data) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Informações Atualizadas</h2>
        <p><strong>Nome:</strong> ${data.name?.firstname || ''} ${data.name?.lastname || ''}</p>
        <p><strong>Username:</strong> ${data.username || 'Não alterado'}</p>
        <p><strong>Email:</strong> ${data.email || 'Não alterado'}</p>
        <p><strong>Telefone:</strong> ${data.phone || 'Não alterado'}</p>
        <p><strong>Endereço:</strong> ${data.address?.street || ''}, ${data.address?.number || ''}, ${data.address?.city || ''}</p>
    `;
}
