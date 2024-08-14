let Btn_TodosUsuarios = document.getElementById('Btn_TodosUsuarios');
let Btn_IdUsuarios = document.getElementById('Btn_IdUsuarios');
let Btn_LimiteUsuarios = document.getElementById('Btn_LimiteUsuarios');
let Btn_UsuarioAleatorio = document.getElementById('Btn_UsuarioAleatorio');
let container = document.querySelector('.container');



// TODOS
Btn_TodosUsuarios.addEventListener('click', () => {
    fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(json => incluirTela(json));
});

// POR ID
Btn_IdUsuarios.addEventListener('click', () => {
    let Id_Usuario = document.getElementById('IdInput').value;
    if (Id_Usuario) {
        fetch(`https://fakestoreapi.com/users/${Id_Usuario}`)
            .then(res => res.json())
            .then(json => incluirTela([json]));
    } 
});

// COM LIMITE
Btn_LimiteUsuarios.addEventListener('click', () => {
    let Limite = document.getElementById('LimiteInput').value;
    if(Limite){
        fetch(`https://fakestoreapi.com/users?limit=${Limite}`)
            .then(res => res.json())
            .then(json => incluirTela(json));
    }
});



// USUÁRIO ALEATÓRIO
Btn_UsuarioAleatorio.addEventListener('click', () => {
    fetch('https://fakestoreapi.com/users?sort=desc')
        .then(res => res.json())
        .then(json => {
            // Seleciona um usuário aleatório da resposta
            const usuarioAleatorio = json[Math.floor(Math.random() * json.length)];
            incluirTela([usuarioAleatorio]);
        });
});


// INCLUIR NA TELA
function incluirTela(results) {
    container.innerHTML = ''; 
    results.forEach(res => {
        let tags = criarTags(['div', 'img', 'h2', 'p', 'p', 'p', 'p', 'p', 'p']);
        tags = preencherTags(tags, res);
        container.appendChild(tags[0]);
    });
}

// CRIAR CARDS
function criarTags(textos) {
    let tags = [];
    textos.forEach(element => {
        let tag = document.createElement(element);
        tags.push(tag);
    });
    return tags;
}

// PREENCHER CARDS
function preencherTags(tags, result) {
    tags[0].classList.add('user');
    tags[1].classList.add('user-image'); 
    tags[2].classList.add('user-name');
    tags[3].classList.add('user-username');
    tags[4].classList.add('user-email');
    tags[5].classList.add('user-phone');
    tags[6].classList.add('user-city');
    tags[7].classList.add('user-street');
    tags[8].classList.add('user-number');

    tags[0].appendChild(tags[1]);
    tags[0].appendChild(tags[2]);
    tags[0].appendChild(tags[3]);
    tags[0].appendChild(tags[4]);
    tags[0].appendChild(tags[5]);
    tags[0].appendChild(tags[6]);
    tags[0].appendChild(tags[7]);
    tags[0].appendChild(tags[8]);

    tags[1].src = 'img/usuario_sem_foto.png';
    tags[2].textContent = `Name: ${result.name.firstname} ${result.name.lastname}`;
    tags[3].textContent = `Username: ${result.username}`;
    tags[4].textContent = `Email: ${result.email}`;
    tags[5].textContent = `Phone: ${result.phone}`;
    tags[6].textContent = `Cidade: ${result.address.city}`;
    tags[7].textContent = `Rua: ${result.address.street}, ${result.address.number}`;

    return tags;
}
