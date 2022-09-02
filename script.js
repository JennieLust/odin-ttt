/*              GOAL: as little global code as possible         */

const gameContainer = document.querySelector(".game-container")
const cell0 = document.querySelector(".cell-0")
const cell1 = document.querySelector(".cell-1")
const cell2 = document.querySelector(".cell-2")
const cell3 = document.querySelector(".cell-3")
const cell4 = document.querySelector(".cell-4")
const cell5 = document.querySelector(".cell-5")
const cell6 = document.querySelector(".cell-6")
const cell7 = document.querySelector(".cell-7")
const cell8 = document.querySelector(".cell-8")

const startButton = document.querySelector(".start-btn");
const p1Info = document.querySelector(".player-1-info");
const p2Info = document.querySelector(".player-2-info");
const p1Button = document.querySelector(".p1-button");
const p2Button = document.querySelector(".p2-button")


startButton.addEventListener('click', () => {
    if (startButton.innerText === "SPELA") {
        p1Info.style.visibility = "visible";
        p2Info.style.visibility = "visible";
        /* Maybe own function ?
        show player info form 
        enter into variables etc
        change innerText to "BÖRJA OM" */
        startButton.innerText = "BÖRJA OM"
    } else if (startButton.innerText === "BÖRJA OM") {
        gameBoard.clear();
        startButton.innerHTML = "SPELA"
        p1Info.style.visibility = "hidden";
        p2Info.style.visibility = "hidden";
    }
});

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
    /* display function */
    const display = () => {
        cell0.innerText = arr[0];
        cell1.innerText = arr[1];
        cell2.innerText = arr[2];
        cell3.innerText = arr[3];
        cell4.innerText = arr[4];
        cell5.innerText = arr[5];
        cell6.innerText = arr[6];
        cell7.innerText = arr[7];
        cell8.innerText = arr[8];
    }
    return {
        add, 
        clear, 
        arr, 
        display,
    };
})();


gameBoard.display();


/* players stored in objects / factory */
const playerFactory= (name, icon) => {
    return { name, icon };
}


/* test players
const abby = playerFactory("Abbaddon", "x")
const dick = playerFactory("Dick Roman", "o")
 */

/* object to control the flow of the game itself 
    a. enter player names - default to player 1 and 2
    b. assign icon 
    1. first move to x? 
    2. display whose move it is and their icon
    3. on click on cell (grid item) enter current players icon - disable click on cell already filled
    4. repeat for other player (how do i determine player, var with number and if(odd or even))
    5. when win condition is fullfilled or no empty strings remain - determine winner and display
*/

/* set up your HTML and write JS to render to webpage 
    ALWAYS: 
        title
        gameboard 
    
    BEFORE GAME: 
        button - start 

    START BUTTON PRESSED: 
        fill in player names

    DURING GAME: 
        button - restart
        display turn and icon
    
    AFTER GAME: 
        button - restart 
        game results
*/

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