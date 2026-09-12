import { createBoard } from "./board.js";
import { addAction, resetQueue, renderQueue, actionQueue } from "./queue.js";
import { loadCharacter } from "./gameState.js";
import { buildMovePreview } from "./preview.js";
import { render } from "./renderer.js";

const hostBtn = document.getElementById("hostBtn");
const joinBtn = document.getElementById("joinBtn");
const characterSelect = document.getElementById("characterSelect");
const characterGrid = document.getElementById("characterGrid");
const game = document.getElementById("game");

const resetBtn = document.getElementById("resetActions");
const endTurnBtn = document.getElementById("endTurn");

let selectedCharacter = null;
let characterData = [];

hostBtn.onclick = openCharacterSelect;
joinBtn.onclick = openCharacterSelect;

async function openCharacterSelect(){

    if(characterData.length===0){

        characterData=await fetch("./data/characters.json")
            .then(r=>r.json());

    }

    characterSelect.classList.remove("hidden");
    characterGrid.innerHTML="";

    characterData.forEach(character=>{

        const card=document.createElement("div");

        card.className="characterCard";

        card.innerHTML=`
            <strong>${character.name}</strong>
            <br>
            <small>AP ${character.baseAP}</small>
        `;

        card.onclick=()=>{

            selectedCharacter=character.name;

            document.querySelectorAll(".characterCard")
                .forEach(c=>c.classList.remove("selected"));

            card.classList.add("selected");

            loadCharacter(character);

            startGame();

        };

        characterGrid.appendChild(card);

    });

}

function startGame() {

    characterSelect.classList.add("hidden");
    game.classList.remove("hidden");

    render();

}

// ===== 입력 =====

document.addEventListener("keydown", e => {

    if (game.classList.contains("hidden")) return;

    switch (e.key.toLowerCase()) {

        case "w":
            addAction("MOVE", "↑");
            break;

        case "a":
            addAction("MOVE", "←");
            break;

        case "s":
            addAction("MOVE", "↓");
            break;

        case "d":
            addAction("MOVE", "→");
            break;

        case "q":
            addAction("SKILL", "Q");
            break;

        case "e":
            addAction("SKILL", "E");
            break;

        default:
            return;

    }

    render();

});

// ===== 버튼 =====

resetBtn.onclick = () => {

    resetQueue();
    render();

};

endTurnBtn.onclick = () => {

    console.log("턴 종료");

    console.log({
        character: selectedCharacter,
        actions: actionQueue
    });

};