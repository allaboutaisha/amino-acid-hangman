// constants and variables and cached element references
const $body = $('body');
const $welcomeScreen = $('#welcome-screen');
const $gameScreen = $('#game-screen');

const $modal1 = $('#modalOne');
const $modal2 = $('#modalTwo');
const $modal3 = $('#modalThree');
const $button = $('button');
const $p = $('p');

// registered event listeners
$body.on('click',handleClick);

// functions
function handleClick() {
    console.log('Click');
    $welcomeScreen.remove();
    $gameScreen.removeClass('hidden');
}

// worldList = ['Alanine','Isoleucine','Leucine','Methionine','Phenylalanine','Tryptophan','Tyrosine','Valine','Histidine','Lysine','Threonine','Arginine','Asparagine','Aspartic Acid','Cysteine','Glutamic Acid','Glutamine','Glycine','Proline','Serine']


const words = [
    {word: 'Alanine',
    hint: 'This is an amino acid with a hydrophobic side chain.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/L-Alanin_-_L-Alanine.svg/1200px-L-Alanin_-_L-Alanine.svg.png'},

    {word: 'Isoleucine',
    hint: 'This is an amino acid with a hydrophobic side chain.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/L-Isoleucin_-_L-Isoleucine.svg/1200px-L-Isoleucin_-_L-Isoleucine.svg.png'},

    {word: 'Leucine',
    hint: 'This is an amino acid with a hydrophobic side chain.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/L-Leucine.svg/1200px-L-Leucine.svg.png'},

    {word: 'Methionine',
    hint: 'Even though this amino acid has sulfur in its side chain, it cannot form disulfide bridges.',
    imageURL: 'https://file.medchemexpress.com/product_pic/hy-n0326.gif'},

    {word: 'Phenylalanine',
    hint: 'This amino acid is an aromatic amino acid.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/L-Phenylalanin_-_L-Phenylalanine.svg/1200px-L-Phenylalanin_-_L-Phenylalanine.svg.png'},

    {word: 'Tryptophan',
    hint: 'This amino acid is an aromatic amino acid.',
    imageURL: 'https://www.sigmaaldrich.com/deepweb/content/dam/sigma-aldrich/structure1/074/mfcd00064340.eps/_jcr_content/renditions/mfcd00064340-medium.png'},

    {word: 'Tyrosine',
    hint: 'This amino acid is an aromatic amino acid.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/L-Tyrosin_-_L-Tyrosine.svg/800px-L-Tyrosin_-_L-Tyrosine.svg.png'},

    {word: 'Valine',
    hint: 'This is an amino acid with a hydrophobic side chain.',
    imageURL: 'https://www.sigmaaldrich.com/deepweb/content/dam/sigma-aldrich/structure8/129/mfcd00064220.eps/_jcr_content/renditions/mfcd00064220-medium.png'},

    {word: 'Histidine',
    hint: 'This amino acid is positively charged at physiological pH with a charge of about +0.1.',
    imageURL: 'https://file.medchemexpress.com/product_pic/hy-n0832.gif'},

    {word: 'Lysine',
    hint: 'The single letter abbreviation for this amino acid is K.',
    imageURL: 'https://file.medchemexpress.com/product_pic/hy-n0469.gif'},

    {word: 'Threonine',
    hint: 'This is an amino acid with a polar uncharged side chain.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/L-Threonin_-_L-Threonine.svg/1200px-L-Threonin_-_L-Threonine.svg.png'},

    {word: 'Arginine',
    hint: 'The single letter abbreviation for this amino acid is R.',
    imageURL: 'https://file.medchemexpress.com/product_pic/hy-n0455.gif'},

    {word: 'Asparagine',
    hint: 'The single letter abbreviation for this amino acid is N.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/L-Asparagin_-_L-Asparagine.svg/1200px-L-Asparagin_-_L-Asparagine.svg.png'},

    {word: 'Aspartic Acid',
    hint: 'The single letter abbreviation for this amino acid is D.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/L-Asparagins%C3%A4ure_-_L-Aspartic_acid.svg/1200px-L-Asparagins%C3%A4ure_-_L-Aspartic_acid.svg.png'},

    {word: 'Cysteine',
    hint: 'This amino acid can form disulfide bridges.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/L-Cystein_-_L-Cysteine.svg/1200px-L-Cystein_-_L-Cysteine.svg.png'},

    {word: 'Glutamic Acid',
    hint: 'The single letter abbreviation for this amino acid is E.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/L-Glutamins%C3%A4ure_-_L-Glutamic_acid.svg/800px-L-Glutamins%C3%A4ure_-_L-Glutamic_acid.svg.png'},

    {word: 'Glutamine',
    hint: 'The single letter abbreviation for this amino acid is Q.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/L-Glutamin_-_L-Glutamine.svg/1200px-L-Glutamin_-_L-Glutamine.svg.png'},

    {word: 'Glycine',
    hint: 'This is the only achiral amino acid and the only optically inactive amino acid.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Glycine-2D-skeletal.png/640px-Glycine-2D-skeletal.png'},

    {word: 'Proline',
    hint: 'This amino acid\'s unusual structure causes it to disrupt secondary structures such as alpha helices and beta pleated sheets.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Prolin_-_Proline.svg/800px-Prolin_-_Proline.svg.png'},

    {word: 'Serine',
    hint: 'This is an amino acid with a polar uncharged side chain.',
    imageURL: 'https://file.medchemexpress.com/product_pic/hy-n0650.gif'},
];

let letterArray = [];
let randomNum = Math.floor(Math.random() * words.length);
let randomWord = words[randomNum].word;
let hint = words[randomNum].hint;
let img = words[randomNum].imageURL;
let imgSrc = document.getElementById('img');
imgSrc.src = img;

const guessWord = document.getElementById('guess');

const letter = document.querySelector('.keyboard');

const hintBtn = document.querySelector('#hint');

const reset = document.querySelector('#reset');

const loadNew = document.querySelector('#load-new');

const tryAgain = document.querySelector('.try-again');

const next = document.querySelector('.next');

const close = document.querySelector('.close');

const hintTxt = document.getElementById('hint-text');

let attempts = 5/5

letter.addEventListener('click',(event) => {
    if(event.target.tagName !== 'BUTTON') return;
    letterArray.push(event.target.textContent);
    guessWord.innerHTML = letterArray.join('');
})

hintBtn.addEventListener('click',(event) => {
    hintTxt.innerHTML=hint;
    $modal1.modal({
        fadeDuration: 500
     });
})

reset.addEventListener('click',(event) => {
    console.log(event.target)
})
console.log(reset)

loadNew.addEventListener('click',(event) => {
    console.log(event.target)
})
console.log(loadNew)

tryAgain.addEventListener('click',(event) => {
    console.log(event.target)
})
console.log(tryAgain)

next.addEventListener('click',(event) => {
    console.log(event.target)
})
console.log(next)

close.addEventListener('click',(event) => {
    console.log(event.target)
})
console.log(close)


// when randomWord is generated, show image from the same array

// Click letter (function is) to display on line

// Must start with 5 tries 

// when letter is clicked, check IF letter = OR == OR === one or more letters from randomWord at any index,

// guessed letters/word or typed must === randomword at any index

// IF true, display on screen at index where randomWord has it, enter letter through span event, change color of button to green

// ELSE disable button, change color of button, and deduct 1/5 until attempts === 0

// change inner html of attempts every time wrong letter is clicked

// if attempts === 0/5 OR attempts < 1, display gameover popup 

// if allLetters === randomWord letters, AND attempts >= 1, display winning popup

// If hint button clicked, hint must popup, displaying hint === random word that is generated 

// const initializer = () => {
//     attempts = 5/5;
// }

// loadNewButton.addEventListener("click",initializer);

// window.onload = initializer;

// when randomWord is generated, access hint and imageURL

// const wordArray = randomWord.split('');

// const placeHolder = wordArray.map(function () {
//     return '_'
// });

// document.body.innerHTML = placeHolder.join(' ');

// console.log(wordArray);








