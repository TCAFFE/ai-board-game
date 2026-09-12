import { createBoard } from "./board.js";
import { addAction, resetQueue, renderQueue } from "./queue.js";

const characters = [
"G.PT","P.P.L-XitY","Q-W4yne","GeMinI","G.roK","Li-tun",
"lil cl4ude","Gigantic Duo","Deep$ick","サK4-na",
"Co.piLot","Quad Core","C.lov4","cO-h3r€"
];

const hostBtn = document.getElementById("hostBtn");
const joinBtn = document.getElementById("joinBtn");
const characterSelect = document.getElementById("characterSelect");
const characterGrid = document.getElementById("characterGrid");
const game = document.getElementById("game");

let selectedCharacter = null;

hostBtn.onclick = openCharacterSelect;
joinBtn.onclick = openCharacterSelect;

function openCharacterSelect() {
    characterSelect.classList.remove("hidden");
    characterGrid.innerHTML = "";

    characters.forEach(name => {
        const card = document.createElement("div");
        card.className = "characterCard";
        card.textContent = name;

        card.onclick = () => {
            selectedCharacter = name;

            document.querySelectorAll(".characterCard")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            startGame();
        };

        characterGrid.appendChild(card);
    });
}

function startGame() {

    characterSelect.classList.add("hidden");
    game.classList.remove("hidden");

    renderQueue();

}

// ===== 임시 입력 테스트 =====

document.addEventListener("keydown", e => {

    if (game.classList.contains("hidden")) return;

    switch(e.key.toLowerCase()){

        case "w": addAction("MOVE","↑"); break;
        case "a": addAction("MOVE","←"); break;
        case "s": addAction("MOVE","↓"); break;
        case "d": addAction("MOVE","→"); break;
        case "q": addAction("SKILL","Q"); break;
        case "e": addAction("SKILL","E"); break;
        default: return;
    }

});

document.getElementById("resetActions").onclick = resetQueue;

document.getElementById("endTurn").onclick = () => {
    console.log("턴 종료", selectedCharacter);
};