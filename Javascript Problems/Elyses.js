// Elyses Destructured Enchantments
// https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments

function getFirstCards(deck) {
    const [first] = deck;
    return first;
}

function getSecondCard(deck) {
    const [, card] = deck;
    return card;
}

function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]]
    return deck;
}


function discardTopCard(deck) {
    const [a, ...otherPart] = deck
    return [a, otherPart];
}


const FACE_CARDS = ['jack', 'queen', 'king'];

function insertFaceCards(deck) {
    const [a, ...otherPart] = deck;
    return [a, ...FACE_CARDS, ...otherPart];
    
}

