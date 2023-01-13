// variables constants
let letterArray, randomNum, randomWord, hint, img, renderArr, attempts;


// cached element references
const $body = $('body');
const $guessWord = $('#guess');
const $letter = $('.keyboard');
const $tryAgain = $('.try-again');
const $next = $('.next');
const $hintBtn = $('#hint');
const $hintTxt = $('#hint-text');
const $reset = $('#reset');
const $attemptsSection = $(".five-attempts");
const $loadNew = $('.load-new');
const $modal1 = $('#modalOne');
const $modal2 = $('#modalTwo');
const $modal3 = $('#modalThree');
const $welcomeScreen = $('#welcome-screen');
const $gameScreen = $('#game-screen');
let $img = $('img');

// event listeners
$loadNew.on('click', runGame);
$body.on('click', handleClick);
$hintBtn.on('click', showHint);
$tryAgain.on('click', resetGame);
$next.on('click', runGame);
$reset.on('click', resetGame);
$letter.on('click', runLetter);

// functions
function handleClick() {
    $welcomeScreen.remove();
    $gameScreen.removeClass('hidden');
}


function showHint () {
    $hintTxt.html(hint);
    $modal1.modal({
        fadeDuration: 500
    });
}


function resetGame() {
    attempts = 5;
    $attemptsSection.text(`ATTEMPTS = ${attempts}/5`);
    renderArr = [];
    createRenderArray();
    $('.key').attr('disabled', false);
}


function runLetter(event) {
    if (event.target.tagName !== 'BUTTON' || event.target.disabled) return;
    event.target.disabled = true;
    let isIncluded = randomWord.toUpperCase().includes(event.target.textContent);

    if (!isIncluded) {
        decreaseAttempt();
    }

    let idxArr = [];

    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i].toUpperCase() === event.target.textContent) {
            idxArr.push(i); 
        }
    }

    renderArr.forEach(function (empty, idx) {
        if (idxArr.includes(idx)) {
            renderArr[idx] = event.target.textContent
        }
    });

    functionRender();
    checkWinner();

    letterArray.push(event.target.textContent);
}


const decreaseAttempt = function () {
    attempts--;
    $attemptsSection.text(`ATTEMPTS = ${attempts}/5`);
    if (attempts === 0) {
        return $modal2.modal({
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
    }
}

function checkWinner() {
    if (renderArr.join('') === randomWord.toUpperCase()) {
        $modal3.modal();
    }
};


function createRenderArray() {
    for (let i = 0; i < randomWord.length; i++) {
        renderArr.push('_')
    }
    functionRender();
}

function functionRender() {
    $guessWord.html(renderArr.join(' '));
}

runGame();

function runGame() {
    letterArray = [];
    randomArray = [];

    randomNum = Math.floor(Math.random() * words.length);
    randomWord = words[randomNum].word;
    console.log(randomWord)
    hint = words[randomNum].hint;
    img = words[randomNum].imageURL;
    
    $img.attr('src', img);


    attempts = 5;
    renderArr = [];

    createRenderArray();
    functionRender();

    $attemptsSection.text(`ATTEMPTS = ${attempts}/5`);
    $('.key').attr('disabled', false);
}








