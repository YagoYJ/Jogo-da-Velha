// Validação dos Players:
var form = document.querySelector("form");
var player1;
var player2;
var pPlayer1 = document.getElementById("pPlayer1");
var pPlayer2 = document.getElementById("pPlayer2");
var jogo = document.getElementById("jogo");
var players = document.getElementById("players");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    player1 = document.getElementById("inputPlayer1").value;
    player2 = document.getElementById("inputPlayer2").value;
    pPlayer1.innerText += " " + player1;
    pPlayer2.innerText += " " + player2;
    players.style.display = "none";
    jogo.style.display = "block";
});

// Lógica do jogo:
// Criando o Array das casas:

var casas = {};
for (var x = 0; x < 9; x++) {
    casas[x] = document.getElementById("casa" + x);
}

// Adicionando evento de clique:
var vez = 1; // Vez de qual jogador

// Mostra quem deverá jogar agora:
function mostrarVez() {
    if (vez == 1) {
        pPlayer1.classList.add("vezAtual");
        pPlayer2.classList.remove("vezAtual");
    } else {
        pPlayer2.classList.add("vezAtual");
        pPlayer1.classList.remove("vezAtual");
    }
}

// Função para colocar o simbolo:
function marcar(e) {
    if (e.innerText == "-") {
        if (vez == 1) {
            e.innerText = "X";
            vez = 2;
        } else {
            e.innerText = "O";
            vez = 1;
        }
    }
}

// Mudar estilos quando o jogo acabar:
var resultado = document.getElementById("resultado");
var informacoes = document.getElementById("informacoes");
var container = document.getElementById("container");

function mudarEstilo() {
    resultado.style.display = "block";
    informacoes.classList.add("finalizado");
    container.classList.add("finalizado");
}

// Verificar o Vencedor:
var vencedor;
var titulo = document.getElementById("textoVencedor");

function verificarVencedor() {
    // Vertical:
    if (casas[0].innerText !== "-" && casas[0].innerText == casas[3].innerText && casas[0].innerText == casas[6].innerText) {
        if (casas[0].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[1].innerText !== "-" && casas[1].innerText == casas[4].innerText && casas[1].innerText == casas[7].innerText) {
        if (casas[1].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[2].innerText !== "-" && casas[2].innerText == casas[5].innerText && casas[2].innerText == casas[8].innerText) {
        if (casas[2].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    }
    // Horizontal:
    else if (casas[0].innerText !== "-" && casas[0].innerText == casas[1].innerText && casas[0].innerText == casas[2].innerText) {
        if (casas[0].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[3].innerText !== "-" && casas[3].innerText == casas[4].innerText && casas[3].innerText == casas[5].innerText) {
        if (casas[3].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[6].innerText !== "-" && casas[6].innerText == casas[7].innerText && casas[6].innerText == casas[8].innerText) {
        if (casas[6].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    }
    // Diagonal:
    else if (casas[0].innerText !== "-" && casas[0].innerText == casas[4].innerText && casas[0].innerText == casas[8].innerText) {
        if (casas[0].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[2].innerText !== "-" && casas[2].innerText == casas[4].innerText && casas[2].innerText == casas[6].innerText) {
        if (casas[2].innerText == "X") {
            vencedor = player1;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        } else {
            vencedor = player2;
            textoVencedor.innerText = vencedor + " venceu!";
            mudarEstilo();
        }
    } else if (casas[0].innerText != "-" && casas[1].innerText != "-" && casas[2].innerText != "-" && casas[3].innerText != "-" && casas[4].innerText != "-" && casas[5].innerText != "-" && casas[6].innerText != "-" && casas[7].innerText != "-" && casas[8].innerText != "-") {
        vencedor = "Deu empate";
        textoVencedor.innerText = vencedor;
        mudarEstilo();
    }
}
// Aplicando os eventos de click:
casas[0].addEventListener("click", function() {
    marcar(casas[0]);
    mostrarVez();
    verificarVencedor();
});
casas[1].addEventListener("click", function() {
    marcar(casas[1]);
    mostrarVez();
    verificarVencedor();
});
casas[2].addEventListener("click", function() {
    marcar(casas[2]);
    mostrarVez();
    verificarVencedor();
});
casas[3].addEventListener("click", function() {
    marcar(casas[3]);
    mostrarVez();
    verificarVencedor();
});
casas[4].addEventListener("click", function() {
    marcar(casas[4]);
    mostrarVez();
    verificarVencedor();
});
casas[5].addEventListener("click", function() {
    marcar(casas[5]);
    mostrarVez();
    verificarVencedor();
});
casas[6].addEventListener("click", function() {
    marcar(casas[6]);
    mostrarVez();
    verificarVencedor();
});
casas[7].addEventListener("click", function() {
    marcar(casas[7]);
    mostrarVez();
    verificarVencedor();
});
casas[8].addEventListener("click", function() {
    marcar(casas[8]);
    mostrarVez();
    verificarVencedor();
});