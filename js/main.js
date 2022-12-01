// constants and variables and cached element references
const $body = $('body');
const $welcomeScreen = $('#welcome-screen');
const $gameScreen = $('#game-screen');

// registered event listeners
$body.on('click',handleClick);

// functions
function handleClick() {
    $welcomeScreen.remove();
    $gameScreen.removeClass('hidden');
}

// LOGIC

// worldList = ['Alanine','Isoleucine','Leucine','Methionine','Phenylalanine','Tryptophan','Tyrosine','Valine','Histidine','Lysine','Threonine','Arginine','Asparagine','Aspartic Acid','Cysteine','Glutamic Acid','Glutamine','Glycine','Proline','Serine']

// hint.onclick = function() {
//     hints =
// 

