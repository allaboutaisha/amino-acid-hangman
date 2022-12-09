const loadNew = document.querySelector('#load-new');
const $body = $('body');
const $welcomeScreen = $('#welcome-screen');
const $gameScreen = $('#game-screen');

loadNew.addEventListener('click', refreshPage);
$body.on('click',handleClick);

function handleClick() {
    $welcomeScreen.remove();
    $gameScreen.removeClass('hidden');
}

function refreshPage () {
    runGame();
    handleClick();
    document.querySelectorAll('.key').forEach(b => b.disabled = false);
};

runGame();

function runGame() {
   
    const $modal1 = $('#modalOne');
    const $modal2 = $('#modalTwo');
    const $modal3 = $('#modalThree');
    const $button = $('button');
    const $p = $('p'); 

    // GAME-SCREEN:

    // Amino Acids = ['Alanine','Isoleucine','Leucine','Methionine','Phenylalanine','Tryptophan','Tyrosine','Valine','Histidine','Lysine','Threonine','Arginine','Asparagine','Aspartic Acid','Cysteine','Glutamic Acid','Glutamine','Glycine','Proline','Serine']

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
    const tryAgain = document.querySelector('.try-again');
    const next = document.querySelector('.next');
    const hintBtn = document.querySelector('#hint');
    const hintTxt = document.getElementById('hint-text');
    const reset = document.querySelector('#reset');
    // const close = document.querySelector('.close');
    const attemptsSection = document.querySelector(".five-attempts");

    let attempts = 5;
    let renderArr = [];

    const decreaseAttempt = function() {
        attempts--;
        attemptsSection.textContent = `ATTEMPTS = ${attempts}/5`;
        if (attempts === 0) {
            return $modal2.modal({
                escapeClose: false,
                clickClose: false,
                showClose: false
              });
        } 
    }
    
    function checkWinner() {
        if(renderArr.join('') === randomWord.toUpperCase()) {
            return $modal3.modal({ 
                // escapeClose: false,
                // clickClose: false,
                showClose: false
            
        });
        }};

    createRenderArray();

    function createRenderArray() {
        for (let i = 0; i < randomWord.length; i++) {
            renderArr.push('_')
        }
        functionRender();
    }
    
    function functionRender() {
        guessWord.innerHTML = renderArr.join(' ');
    }

    functionRender();

    letter.addEventListener('click',(event) => {
        if(event.target.tagName !== 'BUTTON' || event.target.disabled) return;
        event.target.disabled = true;
        let isIncluded = randomWord.toUpperCase().includes(event.target.textContent);

        if (!isIncluded) {
            decreaseAttempt();
        }
        
        let idxArr = [];

        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i].toUpperCase() === event.target.textContent) {
                idxArr.push(i)
            }
        }

        renderArr.forEach(function(empty, idx) {
            if (idxArr.includes(idx)) {
                renderArr[idx] = event.target.textContent
            }
        });
  
        functionRender();
        checkWinner();
    
        letterArray.push(event.target.textContent);
    });

    hintBtn.addEventListener('click',(event) => {
        hintTxt.innerHTML=hint;
        $modal1.modal({
            fadeDuration: 500
        });
    });

    tryAgain.addEventListener('click',(event) => {
        $modal2.modal("hide");
        attempts = 5;
        attemptsSection.textContent = `ATTEMPTS = ${attempts}/5`;
        renderArr = [];
        createRenderArray();
        document.querySelectorAll('.key').forEach(b => b.disabled = false);
    });
    
    next.addEventListener('click',(event) => {
        refreshPage();
    });

    reset.addEventListener('click',(event) => {
        attempts = 5;
        attemptsSection.textContent = `ATTEMPTS = ${attempts}/5`;
        renderArr = [];
        createRenderArray();
        document.querySelectorAll('.key').forEach(b => b.disabled = false);
    });
}









