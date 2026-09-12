import { player, BOARD_SIZE, createBoard } from "./board.js";

export let actionQueue = [];

export function addAction(type,value){

    actionQueue.push({
        order: actionQueue.length+1,
        type,
        value
    });

    renderQueue();

}

export function resetQueue(){

    actionQueue = [];

    renderQueue();

}

function calculateGhostPath(){

    let x = player.x;
    let y = player.y;

    const path=[];

    actionQueue.forEach(action=>{

        if(action.type!=="MOVE") return;

        switch(action.value){

            case "↑": y--; break;
            case "↓": y++; break;
            case "←": x--; break;
            case "→": x++; break;

        }

        x=Math.max(0,Math.min(BOARD_SIZE-1,x));
        y=Math.max(0,Math.min(BOARD_SIZE-1,y));

        path.push({x,y});

    });

    return path;

}

export function renderQueue(updateBoard = true){

    const list = document.getElementById("queue");

    list.innerHTML = "";

    actionQueue.forEach(action=>{

        const li=document.createElement("li");

        li.textContent=`${action.order}. ${action.value}`;

        list.appendChild(li);

    });

}