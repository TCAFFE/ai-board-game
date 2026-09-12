import {gameState} from "./gameState.js";

export function buildMovePreview(actions){

    let x=gameState.player.x;
    let y=gameState.player.y;

    const cells=new Map();

    let step=1;

    actions.forEach(action=>{

        if(action.type!=="MOVE") return;

        switch(action.value){

            case "↑": y--; break;
            case "↓": y++; break;
            case "←": x--; break;
            case "→": x++; break;

        }

        x=Math.max(0,Math.min(gameState.boardSize-1,x));
        y=Math.max(0,Math.min(gameState.boardSize-1,y));

        const key=`${x},${y}`;

        cells.set(key,{
            x,
            y,
            step,
            alpha:0.25+step*0.05
        });

        step++;

    });

    return [...cells.values()];

}