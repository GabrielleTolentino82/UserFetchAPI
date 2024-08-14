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

    //ALTERAR USUÁRIO
    fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: senha,
            name: {
                firstname: nome,
                lastname: sobrenome
            },
            address: {
                city: cidade,
                street: rua,
                number: numero
            },
            phone: phone
        })
    })
    .then(res => res.json())
    .then(data => {
        mostrarResultados(data);
    })
});

//MOSTRAR USUÁRIO NA TELA
function mostrarResultados(data) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Informações Alteradas</h2>
        <p><strong>Nome:</strong> ${data.name.firstname} ${data.name.lastname}</p>
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Endereço:</strong> ${data.address.street}, ${data.address.number}, ${data.address.city}</p>
    `;
}
