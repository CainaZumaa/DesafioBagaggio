
// Verificando se o documento foi completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Obtendo uma referência para o elemento "Deslogar" pelo seu id
    var deslogarLink = document.getElementById("deslogar");

    // Adicionando um ouvinte de evento de clique ao link "Deslogar"
    deslogarLink.addEventListener("click", function () {
        // Removendo o usuário do localStorage
        localStorage.removeItem("usuario");

        // Redirecionando para a página index.html
        window.location.href = "index.html";
    });
});

function logar() {
    // Obtendo o nome de usuário do campo de entrada
    var username = document.getElementById("login").value;

    // Fazer uma solicitação à API do GitHub para verificar se o usuário existe
    fetch("https://api.github.com/users/" + username)
        .then(response => {
            if (response.status === 200) {
                // Usuário existe, processar os dados e salvar no localStorage
                response.json().then(data => {
                    localStorage.setItem("usuario", JSON.stringify(data));
                    // Redirecionar para a página home ou fazer o que for necessário
                    window.location.href = "home.html";
                });
            } else if (response.status === 404) {
                // Usuário não existe, exibindo uma mensagem de erro
                alert("Not Found");
            } else {
                // Outro erro ocorreu, exibindo uma mensagem de erro 
                document.getElementById("user-check-result").innerHTML = "Erro ao verificar o usuário.";
            }
        })
        .catch(error => {
            console.error("Erro ao fazer a solicitação à API do GitHub:", error);
        });function logar() {
            // Obtendo o nome de usuário do campo de entrada
            var username = document.getElementById("login").value;
        
            // Fazer uma solicitação à API do GitHub para verificar se o usuário existe
            fetch("https://api.github.com/users/" + username)
                .then(response => {
                    if (response.status === 200) {
                        // Usuário existe, processar os dados e salvar no localStorage
                        response.json().then(data => {
                            localStorage.setItem("usuario", JSON.stringify(data));
                            // Redirecionar para a página home ou fazer o que for necessário
                            window.location.href = "pagina_home.html";
                        });
                    } else if (response.status === 404) {
                        // Usuário não existe, exibindo uma mensagem de erro
                        alert("Not Found");
                    } else {
                        // Outro erro ocorreu, exibindo uma mensagem de erro genérica
                        document.getElementById("user-check-result").innerHTML = "Erro ao verificar o usuário.";
                    }
                })
                .catch(error => {
                    console.error("Erro ao fazer a solicitação à API do GitHub:", error);
                });
        }
        
        function checkEnter(event) {
            if (event.key === "Enter") {
                logar();
            }
        }
        
}

function checkEnter(event) {
    if (event.key === "Enter") {
        logar();
    }
}



// Função para carregar a foto do usuário e o nome no HTML
function carregarDadosUsuario() {
    // Recupere os dados do usuário do localStorage
    var usuarioData = localStorage.getItem("usuario");

    // Verifique se há dados de usuário no localStorage
    if (usuarioData) {
        // Converta os dados JSON do usuário em um objeto JavaScript
        var usuario = JSON.parse(usuarioData);

        // Obtenha a referência do elemento de imagem onde você deseja exibir a foto
        var avatarUsuarioElement = document.getElementById("avatarUsuario");

        // Obtenha a referência do elemento onde você deseja exibir o nome do usuário
        var nomeUsuarioElement = document.querySelector(".username");

        // Defina o atributo 'src' da imagem com o valor do campo 'avatar_url'
        if (usuario.avatar_url) {
            avatarUsuarioElement.src = usuario.avatar_url;
            avatarUsuarioElement.alt = "Avatar de " + usuario.name;
        }

        // Defina o conteúdo do elemento com o valor do campo 'name'
        if (usuario.name) {
            nomeUsuarioElement.textContent = usuario.name;
        }
    }
}

// Chamando a função para carregar os dados do usuário quando a página for carregada
window.onload = carregarDadosUsuario;

// Função para carregar os dados do usuário e configurar o formulário
function configurarPagina() {
    // Recupere os dados do usuário do localStorage
    var usuarioData = localStorage.getItem("usuario");
    var formularioUsuario = document.getElementById("formularioUsuario");
    formularioUsuario.addEventListener("submit", function (event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var rua = document.getElementById("rua").value;
        var bairro = document.getElementById("bairro").value;
        var estado = document.getElementById("estado").value;
        var cep = document.getElementById("cep").value;

        // Crie um objeto com os dados do usuário
        var usuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            rua: rua,
            bairro: bairro,
            estado: estado,
            cep: cep
        };

        // Adicione o usuário à tabela
        adicionarUsuarioATabela(usuario);

        formularioUsuario.reset();
        formularioElement.style.display = "none";

        // ** Não é mais necessário atualizar o nome do usuário aqui **

    });
    

    // Verifique se há dados de usuário no localStorage
    if (usuarioData) {
        // Converta os dados JSON do usuário em um objeto JavaScript
        var usuario = JSON.parse(usuarioData);

        // Obtenha a referência do elemento de imagem onde você deseja exibir a foto
        var avatarUsuarioElement = document.getElementById("avatarUsuario");

        // Obtenha a referência do elemento onde você deseja exibir o nome do usuário
        var nomeUsuarioElement = document.querySelector(".username");

        // Defina o atributo 'src' da imagem com o valor do campo 'avatar_url'
        if (usuario.avatar_url) {
            avatarUsuarioElement.src = usuario.avatar_url;
            avatarUsuarioElement.alt = "Avatar de " + usuario.name;
        }

        // Defina o conteúdo do elemento com o valor do campo 'name'
        if (usuario.name) {
            nomeUsuarioElement.textContent = usuario.name;
        }
    }

    // Obtendo referências para os elementos HTML do formulário
    var formularioElement = document.getElementById("formulario");
    var mostrarFormularioButton = document.getElementById("mostrarFormulario");

    // Adicionando um ouvinte de evento para mostrar o formulário
    mostrarFormularioButton.addEventListener("click", function () {
        formularioElement.style.display = "block"; // Mostrar o formulário
    });

    // Adicionando um ouvinte de evento para ocultar o formulário quando enviado
    var formularioUsuario = document.getElementById("formularioUsuario");
    formularioUsuario.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Lidando com os dados do formulário, como coletar os valores dos campos
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var cep = document.getElementById("cep").value;
        var habilidades = document.getElementById("habilidades").value;

        // Exemplo: exibir os dados no console
        console.log("Nome:", nome);
        console.log("Sobrenome:", sobrenome);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("CEP:", cep);
        console.log("Habilidades:", habilidades);

        // Limpando os campos do formulário 
        formularioUsuario.reset();

        // Ocultando o formulário novamente após o envio
        formularioElement.style.display = "none";
    });

    // Obtendo uma referência para o botão "Voltar para a Home"
    var voltarHomeButton = document.getElementById("voltarHome");

    // Adicionando um ouvinte de evento de clique ao botão
    voltarHomeButton.addEventListener("click", function () {
        // Redirecionando o usuário de volta à página home.html
        window.location.href = "home.html";
    });
}

// Chamando a função configurarPagina quando a página for carregada
document.addEventListener("DOMContentLoaded", configurarPagina);

function preencherEndereco(cep) {
    fetch("https://brasilapi.com.br/api/cep/v1/" + cep)
        .then(response => response.json())
        .then(data => {
            document.getElementById("numero").value = "";
            document.getElementById("rua").value = data.street;
            document.getElementById("bairro").value = data.neighborhood;
            document.getElementById("estado").value = data.state;
        })
        .catch(error => {
            console.error("Erro ao preencher endereço:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    

    configurarPagina();

    var cepInput = document.getElementById("cep");
    cepInput.addEventListener("blur", function () {
        var cep = cepInput.value.replace(/\D/g, "");
        if (cep.length === 8) {
            preencherEndereco(cep);
        }
    });
});

function preencherEndereco(cep) {
    fetch("https://brasilapi.com.br/api/cep/v1/" + cep)
        .then(response => response.json())
        .then(data => {
            document.getElementById("numero").value = "";
            document.getElementById("rua").value = data.street;
            document.getElementById("bairro").value = data.neighborhood;
            document.getElementById("estado").value = data.state;

            // Mostrar o segundo formulário
            document.getElementById("formularioEndereco").style.display = "block";
        })
        .catch(error => {
            console.error("Erro ao preencher endereço:", error);
        });
}

// tabelando (error)

function exibirTabela(event) {
    event.preventDefault();

    // Obtendo os valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    // Adicionando os valores à tabela
    var tabela = document.getElementById("tabela");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    var novaLinha = tbody.insertRow();
    var colunaNome = novaLinha.insertCell();
    var colunaEmail = novaLinha.insertCell();
    colunaNome.innerHTML = nome;
    colunaEmail.innerHTML = email;

    // Exibindo a tabela e ocultar o formulário
    tabela.style.display = "table";
    document.getElementById("formulario").style.display = "none";
}