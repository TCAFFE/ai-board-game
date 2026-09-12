import {createBoard,player,BOARD_SIZE} from "./board.js";
import {addAction,resetQueue} from "./queue.js";

createBoard();

document.addEventListener("keydown",e=>{

    let nx=player.x;
    let ny=player.y;

    switch(e.key.toLowerCase()){

        case "w":
            ny--;
            addAction("MOVE","↑");
            break;

        case "a":
            nx--;
            addAction("MOVE","←");
            break;

        case "s":
            ny++;
            addAction("MOVE","↓");
            break;

        case "d":
            nx++;
            addAction("MOVE","→");
            break;

        default:
            return;

    }

    if(nx>=0&&nx<BOARD_SIZE&&ny>=0&&ny<BOARD_SIZE){

        player.x=nx;
        player.y=ny;

        createBoard();

    }

});

document.getElementById("resetActions").onclick=()=>{

    resetQueue();

};

document.getElementById("endTurn").onclick=()=>{

    console.log("턴 종료");

};