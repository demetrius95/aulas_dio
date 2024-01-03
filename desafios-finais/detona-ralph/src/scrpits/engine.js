const state = {
    views: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 30,
        currentLife: 5,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
}

function countDown() {
    state.values.currentTime--;
    state.views.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0 || state.values.currentLife <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}

function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function randomSquare() {
    state.views.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.views.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

// function moveEnemy() {
//     state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
// }

function addListenerHitBox() {
    state.views.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.views.score.textContent = state.values.result;
                playSound("hit");
                state.values.hitPosition = null;
            } else {
                state.values.currentLife--;
                state.views.lives.textContent = `x${state.values.currentLife}`;
                state.values.hitPosition = null;
            }
        });
    });
}

function initialize() {
    // moveEnemy();
    addListenerHitBox();
}

initialize();
