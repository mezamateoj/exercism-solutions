// https://exercism.org/tracks/javascript/exercises/high-score-board

/*
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */

function createScoreBoard() {
    let scoreBoard = {'The Best Ever' : 1000000};
    return scoreBoard;
}

/*
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard; 
}

/*
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard; 
}

/*
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard; 
}

/*
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
    Object.keys(scoreBoard).forEach((item) => {
        if(typeof scoreBoard[item] == "number") {
            scoreBoard[item] += 100;
        }
    })
    return scoreBoard;
}

/*
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
function normalizeScore(params) {
    // console.log(normalize([params[normalizeFunction]]));
    const normalize = params['normalizeFunction'];
    return normalize(params['score']);
}
