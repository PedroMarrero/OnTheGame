let menu = document.getElementById("menu-button")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // console.log("Working")

    //menu fechado - tem a classe menu-fechado
    //menu aberto - não tem a classe menu-fechado

    // menu.classList.toggle("menu-fechado")

    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu - tirar a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // mostrar icone-barras
        iconeX.style.display = "inline"
        //esconder o icone-x
        iconeBarras.style.display = "none"

    } else {
        //fechar o menu - adicionar a classe menu-fechado

        menu.classList.add("menu-fechado")

        // mostrar o icone X
        iconeBarras.style.display = "inline"
        // esconder o icone barras
        iconeX.style.display = "none"
    }
}

onresize = () => {
    //abrir o menu - tirar a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // mostrar icone-barras
    iconeX.style.display = "inline"

    //esconder o icone-x
    iconeBarras.style.display = "none"
}


function solicitarOrcamento(event) {
    // Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao,
    }

    // Enviar a requisição para a API
    // Método HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/formulario",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
  
        // CASO SUCESSO
        .then(resposta => {   
            console.log(resposta);     
            
            // Limpar os inputs
            document.querySelector("#contato form").reset()
    
            // Mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso!!! 👍")
        })
        // CASO ERRO
        .catch(erro => {
            console.log(erro);
            // Mostrar alert com msg de erro
            alert("Erro na requisição 😢")
        })
        
        event.solicitarOrcamento()
    }
    