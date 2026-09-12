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
            alpha:Math.min(0.7,0.2+step*0.08)
        });

        step++;

    });

    return [...cells.values()];

}