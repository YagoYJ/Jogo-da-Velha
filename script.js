// Validação dos Players:
var form = document.querySelector("form");
var player1;
var player2;
var pPlayer1 = document.getElementById("pPlayer1");
var pPlayer2 = document.getElementById("pPlayer2");
var gameView = document.getElementById("gameView");
var players = document.getElementById("players");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    player1 = document.getElementById("inputPlayer1").value;
    player2 = document.getElementById("inputPlayer2").value;
    pPlayer1.innerText += " " + player1;
    pPlayer2.innerText += " " + player2;
    players.style.display = "none";
    gameView.style.display = "grid";
});

// Lógica do jogo:
// Criando o Array das square:

var square = {};
for (var x = 0; x < 9; x++) {
    square[x] = document.getElementById("square" + x);

}
var squareText = {};
for (var x = 0; x < 9; x++) {
    squareText[x] = document.getElementById("squareText" + x);
    squareText[x].innerText = "";

}

// Adicionando evento de clique:
var currentTime = 1; // Vez atual do jogador

// Mostra quem deverá jogar agora:
function showCurrentTime() {
    if (currentTime == 1) {
        pPlayer1.classList.add("currentTime");
        pPlayer2.classList.remove("currentTime");
    } else {
        pPlayer2.classList.add("currentTime");
        pPlayer1.classList.remove("currentTime");
    }
}

// Função para colocar o simbolo:
function selectSquare(e) {

    if (e.innerText == "") {
        if (currentTime == 1) {
            e.innerText = "X";
            currentTime = 2;
        } else {
            e.innerText = "O";
            currentTime = 1;
        }
    }
}

// Mudar estilos quando o jogo acabar:
var result = document.getElementById("result");
var gameView = document.getElementById("gameView");
var container = document.getElementById("container");

function changeStyle() {
    result.style.display = "flex";
    gameView.classList.add("finalizado");
    container.classList.add("finalizado");
}

// Verificar o Vencedor:
var winner;
var winnerText = document.getElementById("winnerText");

function verifyWinner() {
    // Vertical:
    if (square[0].innerText !== "" && square[0].innerText == square[3].innerText && square[0].innerText == square[6].innerText) {
        if (square[0].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[1].innerText !== "" && square[1].innerText == square[4].innerText && square[1].innerText == square[7].innerText) {
        if (square[1].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[2].innerText !== "" && square[2].innerText == square[5].innerText && square[2].innerText == square[8].innerText) {
        if (square[2].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    }
    // Horizontal:
    else if (square[0].innerText !== "" && square[0].innerText == square[1].innerText && square[0].innerText == square[2].innerText) {
        if (square[0].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[3].innerText !== "" && square[3].innerText == square[4].innerText && square[3].innerText == square[5].innerText) {
        if (square[3].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[6].innerText !== "" && square[6].innerText == square[7].innerText && square[6].innerText == square[8].innerText) {
        if (square[6].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    }
    // Diagonal:
    else if (square[0].innerText !== "" && square[0].innerText == square[4].innerText && square[0].innerText == square[8].innerText) {
        if (square[0].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[2].innerText !== "" && square[2].innerText == square[4].innerText && square[2].innerText == square[6].innerText) {
        if (square[2].innerText == "X") {
            winner = player1;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        } else {
            winner = player2;
            winnerText.innerText = winner + " venceu!";
            changeStyle();
        }
    } else if (square[0].innerText != "" && square[1].innerText != "" && square[2].innerText != "" && square[3].innerText != "" && square[4].innerText != "" && square[5].innerText != "" && square[6].innerText != "" && square[7].innerText != "" && square[8].innerText != "") {
        winner = "Deu empate";
        winnerText.innerText = winner;
        changeStyle();
    }
}
// Aplicando os eventos de click:
square[0].addEventListener("click", function() {
    selectSquare(squareText[0]);
    showCurrentTime();
    verifyWinner();
});
square[1].addEventListener("click", function() {
    selectSquare(squareText[1]);
    showCurrentTime();
    verifyWinner();
});
square[2].addEventListener("click", function() {
    selectSquare(squareText[2]);
    showCurrentTime();
    verifyWinner();
});
square[3].addEventListener("click", function() {
    selectSquare(squareText[3]);
    showCurrentTime();
    verifyWinner();
});
square[4].addEventListener("click", function() {
    selectSquare(squareText[4]);
    showCurrentTime();
    verifyWinner();
});
square[5].addEventListener("click", function() {
    selectSquare(squareText[5]);
    showCurrentTime();
    verifyWinner();
});
square[6].addEventListener("click", function() {
    selectSquare(squareText[6]);
    showCurrentTime();
    verifyWinner();
});
square[7].addEventListener("click", function() {
    selectSquare(squareText[7]);
    showCurrentTime();
    verifyWinner();
});
square[8].addEventListener("click", function() {
    selectSquare(squareText[8]);
    showCurrentTime();
    verifyWinner();
});