document.getElementById('Formulario').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const phone = document.getElementById('phone').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;

    // NOVO USUÁRIO
    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
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
        if (data && data.id) { 
            localStorage.setItem('usuarioCadastrado', JSON.stringify({
                id: data.id,
                nome: nome,
                sobrenome: sobrenome,
                username: username,
                email: email,
                phone: phone,
                cidade: cidade,
                rua: rua,
                numero: numero
            }));


            window.location.href = 'UsuarioCadastrado.html';
        } 
    });
});
