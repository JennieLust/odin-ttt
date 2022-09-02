/*              GOAL: as little global code as possible         */


/* store gameboard as array inside of a gameboard object
    maybe store inside three inner arrays? is that even needed? could compare against each other easier maybe
        0   1   2
        3   4   5
        6   7   8       */
const gameBoard = (() => {
    const arr = ["", "", "", "", "", "", "", "", ""];
    const add = (icon, position) => arr[position] = icon /* replace array index with icon */
    const clear = () => {for (let i = 0; i < arr.length; i++) { /* clears array */
        arr[i] = "" }} 
    return {
        add, 
        clear, 
        arr, 
    };
})();



/* players stored in objects / factory */
const playerFactory= (name, icon) => {
    return { name, icon };
}

/* test players */
const abby = playerFactory("Abbaddon", "x")
const dick = playerFactory("Dick Roman", "o")

/* object to control the flow of the game itself 
    ?
*/

/* set up your HTML and write JS to render to webpage */

/* function that allow players to add marks to specific spots on the board, tie to DOM, w/ logic prevents already occuptied spots */

/* logic that determines end of game */
/* Manual or is it possible automatic w maths?
if (x or o) is index following, x or o wins:
    0, 3, 6
    1, 4, 7
    2, 5, 8
    0, 1, 2
    3, 4, 5
    6, 7, 8
    0, 4, 8
    2, 4, 6

check for tie [if all cells filled but none fullfills win conditions - draw]
   
if ($LOGIC THAT DETERMINES WINNER) {
    displayRes("Spelare $PLAYERNAME vann! Gratulationer, jag visste att det skulle vara du! Jag är så stolt!")" 
} else {
    displayRes("Ingen vann, ingen var värdig...")
}


function to display results
function displayRes(string) {

}

*/

/* clean up interface: 
allow players to put in their name
button to restart/start the game
display element that congratulates winning player */

/* long term goal: 
    create an AI so player vs pc is possible
        1. start by getting the computer to make random legal move
        2. work on making pc smart - minimax algorithm
        3. if get this running - show off in discord
*/