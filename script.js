const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

const player = (name, symbol) => {
  return { name, symbol };
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

const playGame = (() => {
  const { board } = gameBoard;

  let symbol = "";
  let winningPlayer = "";

  const markSpot = (e) => {
    const targetArrayIndex = board[`${e.target.id}`];
    console.log(e.target);

    if (symbol === "") {
      symbol = player1.symbol;

      if (targetArrayIndex === "") {
        board.splice(`${e.target.id}`, 1, symbol);
      }
    } else if (symbol === player1.symbol) {
      symbol = player2.symbol;
      winningPlayer = player2.name;

      if (targetArrayIndex === "") {
        board.splice(`${e.target.id}`, 1, symbol);
      }
    } else if (symbol === player2.symbol) {
      symbol = player1.symbol;
      winningPlayer = player1.name;

      if (targetArrayIndex === "") {
        board.splice(`${e.target.id}`, 1, symbol);
      }
    }

    const { renderMoves } = renderAndRest;
    renderMoves();
    checkWinner();
  };

  function checkWinner() {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
      removeClick();
      winner.textContent = `${winningPlayer} Wins!`;
      symbol = "";
      return;
    }
    if (
      board[0] !== "" &&
      board[1] !== "" &&
      board[2] !== "" &&
      board[3] !== "" &&
      board[4] !== "" &&
      board[5] !== "" &&
      board[6] !== "" &&
      board[7] !== "" &&
      board[8] !== ""
    ) {
      winner.textContent = "DRAW!";
    }
  }

  const spots = Array.from(document.getElementsByClassName("box"));

  function removeClick() {
    spots.forEach((box) => box.removeEventListener("click", markSpot));
  }

  function addClick() {
    spots.forEach((box) => box.addEventListener("click", markSpot));
  }
  addClick();

  return { addClick };
})();

const renderAndRest = (() => {
  const { board } = gameBoard;
  const { addClick } = playGame;

  function renderMoves() {
    for (let i = 0; i < board.length; i++) {
      const targetBox = document.getElementById(`${i}`);
      targetBox.textContent = board[i];
    }
  }

  const resetBtn = document.getElementById("resetBtn");

  resetBtn.addEventListener("click", () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }

    winner.textContent = "Lets Go!! Game by Aatiq Afzal";

    addClick();
    renderMoves();
  });

  return { renderMoves };
})();
