let Btn_DeleteUsuarios = document.getElementById('Btn_DeleteUsuarios');

// DELETE
Btn_DeleteUsuarios.addEventListener('click', () => {
    let userId = document.getElementById('DeleteInput').value;
    if (userId) {
        // INFORMAÇÕES DO USUÁRIO
        fetch(`https://fakestoreapi.com/users/${userId}`)
            .then(res => res.json())
            .then(user => {
                // DELETAR USUÁRIO
                fetch(`https://fakestoreapi.com/users/${userId}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(json => {
                    alert(`Usuário deletado com sucesso! \nNome: ${user.name.firstname} ${user.name.lastname}\nEmail: ${user.email} \nTelefone: ${user.phone}`);
                });
            });
    }
});
