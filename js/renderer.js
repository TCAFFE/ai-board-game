import { createBoard } from "./board.js";
import { renderQueue, actionQueue } from "./queue.js";
import { buildMovePreview } from "./preview.js";
import { gameState } from "./gameState.js";

export function render() {

    const preview = buildMovePreview(actionQueue);

    createBoard(preview);

    renderQueue(false);

    renderStatus();

}

function renderStatus() {

    const ap = document.getElementById("apDisplay");

    if(ap){

        ap.textContent =
            `AP ${gameState.player.currentAP}/${gameState.player.baseAP}`;

    }

}